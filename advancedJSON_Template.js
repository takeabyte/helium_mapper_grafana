{
  "name": "{{name}}", "dev_eui": "{{dev_eui}}", "device_id": "{{id}}", "reported_at": "{{reported_at}}",
  "data_type": "Mapper",
  "hotspots": [
    {{#hotspots}}
      {
        "hotspot_name": "{{name}}",
        "rssi": {{rssi}},
        "snr": {{snr}},
        "spreading": "{{spreading}}",
        "hsid": "{{id}}",
        "hslat": {{lat}},
        "hslong": {{long}}
      },
    {{/hotspots}}
    "hotspots_end"
  ],
  "raw_data": "{{payload}}",
  {{#decoded}}{{#payload}}
  "accuracy": {{accuracy}},
  "altitude": {{altitude}},
  "battery": {{battery}},
  "lat": {{latitude}},
  "lon": {{longitude}},
  "sats": {{sats}},
  "speed": {{speed}},
  {{/payload}}{{/decoded}}
  {{#dc}}
  "dc_balance": {{balance}}
  {{/dc}}
}
