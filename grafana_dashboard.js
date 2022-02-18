{
  "__inputs": [
    {
      "name": "DS_INFLUXDB_V1",
      "label": "InfluxDB_v1",
      "description": "",
      "type": "datasource",
      "pluginId": "influxdb",
      "pluginName": "InfluxDB"
    }
  ],
  "__elements": [],
  "__requires": [
    {
      "type": "panel",
      "id": "geomap",
      "name": "Geomap",
      "version": ""
    },
    {
      "type": "grafana",
      "id": "grafana",
      "name": "Grafana",
      "version": "8.4.0-beta1"
    },
    {
      "type": "panel",
      "id": "grafana-worldmap-panel",
      "name": "Worldmap Panel",
      "version": "0.3.3"
    },
    {
      "type": "datasource",
      "id": "influxdb",
      "name": "InfluxDB",
      "version": "1.0.0"
    },
    {
      "type": "panel",
      "id": "stat",
      "name": "Stat",
      "version": ""
    },
    {
      "type": "panel",
      "id": "table",
      "name": "Table",
      "version": ""
    }
  ],
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
  "id": null,
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
        "uid": "${DS_INFLUXDB_V1}"
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
            "uid": "${DS_INFLUXDB_V1}"
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
        "uid": "${DS_INFLUXDB_V1}"
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
        "uid": "${DS_INFLUXDB_V1}"
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
        "uid": "${DS_INFLUXDB_V1}"
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
        "uid": "${DS_INFLUXDB_V1}"
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
              "options": "hotspot_name"
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
                "value": 137
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
              },
              {
                "id": "thresholds",
                "value": {
                  "mode": "absolute",
                  "steps": [
                    {
                      "color": "dark-red",
                      "value": null
                    },
                    {
                      "color": "light-red",
                      "value": -103
                    },
                    {
                      "color": "dark-orange",
                      "value": -100
                    },
                    {
                      "color": "orange",
                      "value": -97
                    },
                    {
                      "color": "semi-dark-yellow",
                      "value": -94
                    },
                    {
                      "color": "super-light-green",
                      "value": -91
                    },
                    {
                      "color": "light-green",
                      "value": -88
                    },
                    {
                      "color": "semi-dark-green",
                      "value": -85
                    },
                    {
                      "color": "dark-green",
                      "value": -84
                    }
                  ]
                }
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
                "value": 58
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
                "value": 60
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
                "value": 118
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
                "value": 46
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
                "value": 45
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
                "value": 77
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "distance_km"
            },
            "properties": [
              {
                "id": "custom.width",
                "value": 63
              },
              {
                "id": "unit",
                "value": "lengthkm"
              },
              {
                "id": "decimals",
                "value": 1
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
            "uid": "${DS_INFLUXDB_V1}"
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
                  "distance_km"
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
        "uid": "${DS_INFLUXDB_V1}"
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
                "color": "light-red",
                "value": -103
              },
              {
                "color": "dark-orange",
                "value": -100
              },
              {
                "color": "light-orange",
                "value": -97
              },
              {
                "color": "super-light-yellow",
                "value": -94
              },
              {
                "color": "super-light-green",
                "value": -91
              },
              {
                "color": "light-green",
                "value": -88
              },
              {
                "color": "green",
                "value": -86
              },
              {
                "color": "dark-green",
                "value": -85
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
                  "fixed": "#eaeaf4"
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
            "uid": "${DS_INFLUXDB_V1}"
          },
          "groupBy": [
            {
              "params": [
                "geohash"
              ],
              "type": "tag"
            },
            {
              "params": [
                "none"
              ],
              "type": "fill"
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
    "from": "now-1h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "Helium Mapper",
  "uid": "dB3TKbTGy",
  "version": 20,
  "weekStart": ""
}
