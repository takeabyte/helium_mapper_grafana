function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }
    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

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
            distance_km: msg.payload["distance"]= Number(calcCrow(msg.payload.lat,msg.payload.lon,msg.payload.hotspots[i].hslat,msg.payload.hotspots[i].hslong).toFixed(1)),
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
