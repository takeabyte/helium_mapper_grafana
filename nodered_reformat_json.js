var thing = [{
    reported_at: msg.payload.reported_at,
    hotspot_name: msg.payload.hotspot_name,
    rssi: msg.payload.rssi,
    snr: msg.payload.snr,
    spreading: msg.payload.spreading,
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

msg.payload = thing;
return msg;
