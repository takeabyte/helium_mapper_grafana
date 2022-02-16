{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 8,
  "links": [],
  "liveNow": false,
  "panels": [
    {
      "circleMaxSize": "11",
      "circleMinSize": "7",
      "colors": [
        "#C4162A",
        "#E02F44",
        "#FF7383",
        "#FFA6B0",
        "#C8F2C2",
        "#96D98D",
        "#56A64B",
        "#37872D"
      ],
      "datasource": {
        "type": "influxdb",
        "uid": "izviF8-7z"
      },
      "decimals": 0,
      "esGeoPoint": "geohash",
      "esLocationName": "hotspot_name",
      "esMetric": "rssi",
      "gridPos": {
        "h": 8,
        "w": 12,
        "x": 0,
        "y": 0
      },
      "hideEmpty": false,
      "hideZero": false,
      "id": 4,
      "initialZoom": "12",
      "locationData": "geohash",
      "mapCenter": "Last GeoHash",
      "mapCenterLatitude": 48.8588897,
      "mapCenterLongitude": 2.320041,
      "maxDataPoints": 1,
      "mouseWheelZoom": true,
      "pluginVersion": "7.3.1",
      "showLegend": true,
      "stickyLabels": false,
      "tableQueryOptions": {
        "geohashField": "geohash",
        "latitudeField": "latitude",
        "longitudeField": "longitude",
        "metricField": "metric",
        "queryType": "geohash"
      },
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "izviF8-7z"
          },
          "groupBy": [
            {
              "params": [
                "geohash"
              ],
              "type": "tag"
            }
          ],
          "measurement": "mapper_data",
          "orderByTime": "ASC",
          "policy": "default",
          "refId": "A",
          "resultFormat": "table",
          "select": [
            [
              {
                "params": [
                  "hotspot_name"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "rssi"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "snr"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "spreading"
                ],
                "type": "field"
              }
            ]
          ],
          "tags": [
            {
              "key": "name",
              "operator": "=",
              "value": "YOUR_MAPPER_NAME_GOES_HERE"
            }
          ]
        }
      ],
      "thresholds": "-103,-100,-97,-94,-91,-88,-85",
      "title": "GPS Tracker",
      "type": "grafana-worldmap-panel",
      "unitPlural": "dB",
      "unitSingle": "",
      "unitSingular": "dB",
      "valueName": "total"
    },
    {
      "datasource": {
        "type": "influxdb",
        "uid": "izviF8-7z"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 3,
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "red",
                "value": null
              },
              {
                "color": "#EAB839",
                "value": 3.5
              },
              {
                "color": "green",
                "value": 4.1
              }
            ]
          },
          "unit": "volt"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 2,
        "x": 12,
        "y": 0
      },
      "id": 6,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "limit": 2,
          "values": false
        },
        "text": {},
        "textMode": "auto"
      },
      "pluginVersion": "8.4.0-beta1",
      "targets": [
        {
          "groupBy": [],
          "measurement": "mapper_data",
          "orderByTime": "ASC",
          "policy": "default",
          "refId": "A",
          "resultFormat": "table",
          "select": [
            [
              {
                "params": [
                  "battery"
                ],
                "type": "field"
              },
              {
                "params": [
                  "alias"
                ],
                "type": "alias"
              }
            ]
          ],
          "tags": []
        }
      ],
      "title": "Battery",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "influxdb",
        "uid": "izviF8-7z"
      },
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 2,
        "w": 5,
        "x": 14,
        "y": 0
      },
      "id": 9,
      "options": {
        "colorMode": "value",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "/^hotspot_name$/",
          "values": false
        },
        "text": {},
        "textMode": "value"
      },
      "pluginVersion": "8.4.0-beta1",
      "targets": [
        {
          "groupBy": [],
          "measurement": "mapper_data",
          "orderByTime": "ASC",
          "policy": "default",
          "refId": "A",
          "resultFormat": "table",
          "select": [
            [
              {
                "params": [
                  "hotspot_name"
                ],
                "type": "field"
              }
            ]
          ],
          "tags": []
        }
      ],
      "title": "Last Hotspot",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "influxdb",
        "uid": "izviF8-7z"
      },
      "fieldConfig": {
        "defaults": {
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 2,
        "w": 5,
        "x": 14,
        "y": 2
      },
      "id": 7,
      "options": {
        "colorMode": "value",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "/^Time$/",
          "values": false
        },
        "text": {},
        "textMode": "value"
      },
      "pluginVersion": "8.4.0-beta1",
      "targets": [
        {
          "groupBy": [],
          "measurement": "mapper_data",
          "orderByTime": "ASC",
          "policy": "default",
          "refId": "A",
          "resultFormat": "table",
          "select": [
            [
              {
                "params": [
                  "reported_at"
                ],
                "type": "field"
              }
            ]
          ],
          "tags": []
        }
      ],
      "title": "Last Reported at",
      "type": "stat"
    },
    {
      "datasource": {
        "type": "influxdb",
        "uid": "izviF8-7z"
      },
      "fieldConfig": {
        "defaults": {
          "custom": {
            "align": "center",
            "displayMode": "color-text",
            "filterable": true
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "hotspot"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 181
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "Time"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 183
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "rssi"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 52
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "lat"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 74
              },
              {
                "id": "decimals",
                "value": 6
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "lon"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 68
              },
              {
                "id": "decimals",
                "value": 6
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "snr"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 50
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "hotspot_name"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 123
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "reported_at"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 159
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "hslat"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 69
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "hslong"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 75
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "hsid"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 118
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 34,
        "w": 12,
        "x": 12,
        "y": 4
      },
      "id": 8,
      "options": {
        "footer": {
          "fields": "",
          "reducer": [
            "sum"
          ],
          "show": false
        },
        "frameIndex": 1,
        "showHeader": true,
        "sortBy": [
          {
            "desc": true,
            "displayName": "hotspot_name"
          }
        ]
      },
      "pluginVersion": "8.4.0-beta1",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "izviF8-7z"
          },
          "groupBy": [],
          "measurement": "mapper_data",
          "orderByTime": "ASC",
          "policy": "default",
          "refId": "A",
          "resultFormat": "table",
          "select": [
            [
              {
                "params": [
                  "hotspot_name"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "rssi"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "snr"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "lat"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "lon"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "hsid"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "hslat"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "hslong"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "reported_at"
                ],
                "type": "field"
              }
            ]
          ],
          "tags": []
        }
      ],
      "title": "Raw data",
      "type": "table"
    },
    {
      "datasource": {
        "type": "influxdb",
        "uid": "izviF8-7z"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "#C4162A",
                "value": null
              },
              {
                "color": "#E02F44",
                "value": -120
              },
              {
                "color": "#FF7383",
                "value": -100
              },
              {
                "color": "#FFA6B0",
                "value": -97
              },
              {
                "color": "#C8F2C2",
                "value": -94
              },
              {
                "color": "dark-green",
                "value": -91
              },
              {
                "color": "semi-dark-blue",
                "value": -70
              },
              {
                "color": "dark-blue",
                "value": -50
              }
            ]
          },
          "unit": "rssi"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 12,
        "w": 12,
        "x": 0,
        "y": 8
      },
      "id": 10,
      "maxDataPoints": 1,
      "options": {
        "basemap": {
          "config": {},
          "name": "Basemap",
          "type": "default"
        },
        "controls": {
          "mouseWheelZoom": true,
          "showAttribution": true,
          "showDebug": false,
          "showScale": false,
          "showZoom": true
        },
        "layers": [
          {
            "config": {
              "showLegend": true,
              "style": {
                "color": {
                  "fixed": "dark-green"
                },
                "opacity": 0.6,
                "rotation": {
                  "fixed": 1,
                  "max": 360,
                  "min": -360,
                  "mode": "clamped"
                },
                "size": {
                  "fixed": 5,
                  "max": 15,
                  "min": 2
                },
                "symbol": {
                  "fixed": "img/icons/marker/x-mark.svg",
                  "mode": "fixed"
                },
                "text": {
                  "field": "rssi",
                  "mode": "fixed"
                },
                "textConfig": {
                  "fontSize": 12,
                  "offsetX": 0,
                  "offsetY": 0,
                  "textAlign": "center",
                  "textBaseline": "middle"
                }
              }
            },
            "name": "Mapperlocation",
            "tooltip": true,
            "type": "markers"
          },
          {
            "config": {
              "showLegend": true,
              "style": {
                "color": {
                  "field": "rssi",
                  "fixed": "dark-green"
                },
                "opacity": 0.4,
                "rotation": {
                  "fixed": 0,
                  "max": 360,
                  "min": -360,
                  "mode": "mod"
                },
                "size": {
                  "fixed": 5,
                  "max": 15,
                  "min": 2
                },
                "symbol": {
                  "fixed": "img/icons/marker/circle.svg",
                  "mode": "fixed"
                },
                "textConfig": {
                  "fontSize": 12,
                  "offsetX": 0,
                  "offsetY": 0,
                  "textAlign": "center",
                  "textBaseline": "middle"
                }
              }
            },
            "location": {
              "latitude": "hslat",
              "longitude": "hslong",
              "mode": "coords"
            },
            "name": "Hotspot",
            "tooltip": true,
            "type": "markers"
          }
        ],
        "view": {
          "id": "europe",
          "lat": 46,
          "lon": 14,
          "shared": false,
          "zoom": 4
        }
      },
      "pluginVersion": "8.4.0-beta1",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "izviF8-7z"
          },
          "groupBy": [
            {
              "params": [
                "geohash"
              ],
              "type": "tag"
            }
          ],
          "measurement": "mapper_data",
          "orderByTime": "ASC",
          "policy": "default",
          "query": "SELECT \"hotspot_name\", \"rssi\", \"snr\", \"spreading\", \"hslat\", \"hslong\" FROM \"mapper_data\" WHERE (\"name\" = 'YOUR_MAPPER_NAME_GOES_HERE') AND $timeFilter GROUP BY \"geohash\" ",
          "rawQuery": false,
          "refId": "A",
          "resultFormat": "table",
          "select": [
            [
              {
                "params": [
                  "hotspot_name"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "rssi"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "snr"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "spreading"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "hslat"
                ],
                "type": "field"
              }
            ],
            [
              {
                "params": [
                  "hslong"
                ],
                "type": "field"
              }
            ]
          ],
          "tags": [
            {
              "key": "name",
              "operator": "=",
              "value": "YOUR_MAPPER_NAME_GOES_HERE"
            }
          ]
        }
      ],
      "title": "Hotspot Coverage",
      "type": "geomap"
    }
  ],
  "refresh": "",
  "schemaVersion": 35,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "Helium Mapper2",
  "uid": "dB3TKbTGzz",
  "version": 3,
  "weekStart": ""
}
