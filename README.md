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
   (https://friendsoflittleyus.nl/grafana-helium-gps-tracker-on-raspberry-pi/) 

3) Import Grafana Dashboard 
   (see https://github.com/takeabyte/helium_mapper_grafana/blob/main/grafana_dashboard.js)
   
   In order to show data on the Maps you first need to click EDIT on BOTH Maps (Titlebar dropdown menu).
   From there head over to the bottom section "QUERY" and look for the first line
   `FROM default mapper_data WHERE name = YOUR_MAPPER_NAME_GOES_HERE`
   click on `YOUR_MAPPER_NAME_GOES_HERE` and select your corresponding Mapper name from dropdown menu. 
   Top right click Apply and after that save your dashboard again. 
   

3) Max's custom decoder function 
   (see https://github.com/takeabyte/helium_mapper_grafana/blob/main/decoder_function.js)

4) Custom Advanced JSON Template under your MQTT Mapper Integration 
   (see https://github.com/takeabyte/helium_mapper_grafana/blob/main/advancedJSON_Template.js)

5) Modified "reformat json" NodeRed node to iterate through all available hotspots. 
   (see https://github.com/takeabyte/helium_mapper_grafana/blob/main/nodered_reformat_json.js)
