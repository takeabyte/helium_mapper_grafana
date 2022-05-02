# Overview 

This Repo will guide you through the process of storing and visualizing Helium-enabled GPS-Trackers/Mappers results on a Grafana Dashboard.

It is based on [friendsoflittleyus grafana for rpi](https://friendsoflittleyus.nl/grafana-helium-gps-tracker-on-raspberry-pi/) but improved and updated to influxdb2. 
This is JUST FOR REFERENCE. **There are a major code differences** you can't just update from their version to mine. 
Stuff will break.

For this to work it relies on a few different services and dependencies. \
I compiled Nodered, Fluxdb2 and Grafana in one Docker-Compose file, but you can also install them manually. \
Either on a NAS, VPS, or any PC, Mac, Linux System with support of Docker. \
You could also use your locally hosted MQTT Broker, but I advice against portforwarding, if you don't know how to properly secure your Endpoints. \
Same goes for VPS Instances. These things are directly connected to the Internet. 

**So if you are not 100% sure how to harden and keep the system patched, please don't run it on a VPS. Find yourself an old Laptop or buy a RPI4 instead. **

**TL;DR: Helium Mapper \> Console \> MQTT Integration \> NodeRed \> Fluxdb2 \> Grafana**

While its not as straight forward, I tried to make it as easy as possible. 
Any suggestions for improvement are very welcome. 

# Prerequisites

## Hardware:
TTGo / LilyGo T-Beam Lora esp32 GPS v1.1  
Heltec CubeCell GPS-6502 HTCC-AB02S Board 

## Software: 
### Devices above need to run on either of @Max-Plastix Repos: 
- [TTGO Version](https://github.com/Max-Plastix/tbeam-helium-mapper/releases/)
- [CubeCell Vesion](https://github.com/Max-Plastix/CubeCell-GPS-Helium-Mapper/releases)

### The Device must be: 
- onboarded on [Helium Console](https://console.helium.com/)
- have the following [Decoder Function](https://github.com/Max-Plastix/tbeam-helium-mapper/blob/main/console-decoders/unified_decoder.js) and 
- connected to a MQTT Integration with [Advanced JSON Body Template](https://github.com/takeabyte/helium_mapper_grafana/blob/main/advancedJSON_Template.js)

### MQTT Broker
I use the free tier cloud Broker: [Flespi](https://flespi.com/mqtt-broker), \
 but you could use any other MQTT Broker. \
(I've used Adafruit's free version with some restrictions in the past)

### Docker Stuff 
- install Docker: https://docs.docker.com/engine/install/
- install docker-compose https://docs.docker.com/compose/install \
(Desktop Docker Versions already come preinstalled with compose)
- create Directories for your Docker Containers (your Directories might differ)
   - creating folders for the active user under home directory, change permissions and ownership / UserID (otherwise it will throw an error with some cases), confirm changes with ls command:


   ```
   mkdir -p ~/docker/influx ~/docker/grafana ~/docker/nodered/data 
   sudo chown -R 472:472 ~/docker/grafana && sudo chown -R 1000:1000 ~/docker/nodered/data 
   ls -lna ~/docker/ ~/docker/nodered 
   ```
 - change working directory ```cd ~/docker```
 - copy docker compose file wget https://raw.githubusercontent.com/takeabyte/helium_mapper_grafana/main/docker-compose.yml
 









##### March Update #####
Moving on to newest Flux Database to streamline with your other flux2 datasources. No need to have 2 influx dockers running.

To run the required Docker containers, create new Directories on your Server 
download the `nodered-mosquitto-compose.yml and influx-compose.yml` files from this repo, edit/update required infos and then place them in the corresponding folders. 

Navigate to `~/docker/influx` and execute from within to download and install influx:
`$ sudo docker-compose up -d`

Important. docker-compose expects a docker-compose.yml file in the current directory and if one isn't present it will complain. (will change my files in future update to contain a single docker-compose file for nodered, grafana and influx)

For manual installation please see this for reference. Currently I don't have the time to write a proper Howto from scratch. 
https://www.blackvoid.club/grafana-8-influxdb-2-telegraf-2021-monitoring-stack/ 



If you want to transition to Flux2 but still want to publish to the old influxdb Database, keep in Mind that as I fixed some bugs with string/integer for HSLAT and HSLONG it will throw an error string error and you have to drop that tables first. 


For this build its important to add (update) all the other Files - decoder function, Advanced JSON and nodered reformat json first. 
Once the Database (aka bucket) has some wrong files written in the table you have to delete the table first to proceed.

After you managed to do so, add a new influxdb out Node within nodeRed. 
Go to server and add your new influx 2 server address&port and token. 
go back to Properties and 
name your Bucket: nodered 
Organization: type_your_organization 
Measurement: mapper 
This allows you to reuse my Grafana Template. 


Within grafana go to configurations, 
add a Datasource, add/modify the following (leave rest as is): 
Name: InfluxDB_nodered
Query Language: Flux
HTTP 
Url> http://yourserverip.port_to_influx2docker
Access: Server(default)

InfluxDB Details
Organization: type_your_organization
Token: addyourtoken
Default Bucket: nodered

Save & Test




With multipacket enabled in console.helium.com you can now list all hotspots per Uplink on grafana. 

With the newest feature I added the HotspotID (unique) and Hotspot GPS location to be visible on the Map from each Mapper Uplink.
Also on the RAW table you can now see the distance in km from each mapper gps location point to the respective hotspot. (Hoping it is correctly asserted)
This can be helpful in various scenarios. If you setup a stationary testlocation with your mapper device you can find out how many hotspots you can reach from this location. 
For scouting possible Hotspot placement prior to install. Or you can use the bottom Map view to test out different Antennas. This scenario also relies on a fixed measurement position (mapper location) per given time frame, to keep track later for analyzing this measurement data. 

![mapviews](https://user-images.githubusercontent.com/10709642/154382877-43e1f1f2-2ee9-417c-ac14-1ece6fe10218.png)


This is depending on: 
1) Max_Plastix TTGO Repo 
   (https://github.com/Max-Plastix/tbeam-helium-mapper/releases/tag/v1.7.5)

2) following partly this Guide to create NodeRed > Grafana GPS Map  

3) Import Grafana Dashboard 
   (see https://github.com/takeabyte/helium_mapper_grafana/blob/main/grafana_dashboard.js)
   
   In order to show data on the Maps you first need to click EDIT on BOTH Maps (Titlebar dropdown menu).
   From there head over to the bottom section "QUERY" and look for the first line
   `FROM default mapper_data WHERE name = YOUR_MAPPER_NAME_GOES_HERE`
   click on `YOUR_MAPPER_NAME_GOES_HERE` and select your corresponding Mapper name from dropdown menu. 
   Top right click Apply and after that save your dashboard again. 
   


4) Custom Advanced JSON Template under your MQTT Mapper Integration 
   (see https://github.com/takeabyte/helium_mapper_grafana/blob/main/advancedJSON_Template.js)

5) Modified "reformat json" NodeRed node to iterate through all available hotspots. 
   (see https://github.com/takeabyte/helium_mapper_grafana/blob/main/nodered_reformat_json.js)
