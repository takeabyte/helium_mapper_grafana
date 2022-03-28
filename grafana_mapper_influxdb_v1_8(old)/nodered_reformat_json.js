for (var i = 0; i < msg.payload.hotspots.length-1; i++) {
 
    var thing = [
        {
            reported_at: msg.payload.reported_at,
            hotspot_name: msg.payload.hotspots[i].hotspot_name,
            rssi: msg.payload.hotspots[i].rssi,
            snr: msg.payload.hotspots[i].snr,
            spreading: msg.payload.hotspots[i].spreading,
            hsid: msg.payload.hotspots[i].hsid,
            hslat: msg.payload.hotspots[i].hslat,
            hslong: msg.payload.hotspots[i].hslong,
            battery: msg.payload.battery,
            lat: msg.payload.lat,
            lon: msg.payload.lon,
            speed: msg.payload.speed,
            sats: msg.payload.sats,
        },

        {
          geohash:msg.payload.geohash,
          name:msg.payload.name
        }
    ]
    
    var newMsg = {};
    newMsg.payload = thing;
    node.send(newMsg);
}

return null;
