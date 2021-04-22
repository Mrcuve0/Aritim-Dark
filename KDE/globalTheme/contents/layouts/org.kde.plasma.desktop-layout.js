var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "10",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "561",
                    "ToolBoxButtonY": "28",
                    "iconSize": "2",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "SlidePaths": "/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "9"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
                            "filterActivityInfo": "false",
                            "iconFillThickness": "false",
                            "iconSize": "28",
                            "placeHolder": "Plasma Desktop",
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "10"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "800"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
                            "fillWidth": "true"
                        }
                    },
                    "plugin": "org.kde.windowappmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "18"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "33"
                        },
                        "/Configuration/General": {
                            "history": "#ffdfda,#e1f7ff"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "18"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Advanced": {
                            "interfacesWhitelist": "wlan0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.netspeedWidget"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "18"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "60"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "73"
                        },
                        "/Configuration/Calendar": {
                            "monthCellRadius": "0.14864864864864866",
                            "monthTodayStyle": "bigNumber"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "1027",
                            "DialogWidth": "1876"
                        },
                        "/Configuration/General": {
                            "bottomRowHeight": "350",
                            "clockShowLine2": "true",
                            "clockTimeFormat1": "HH:mm:ss",
                            "clockTimeFormat2": "yyyy-MM-dd",
                            "leftColumnWidth": "300",
                            "topRowHeight": "105",
                            "v71Migration": "true",
                            "v72Migration": "true",
                            "widgetShowMeteogram": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.eventcalendar"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.nightcolorcontrol"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "83",
                    "DialogWidth": "1080"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.5555555555555556,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "73"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "customButtonImage": "manjaro-settings-manager-panel",
                            "favoriteSystemActions": "logout,reboot,shutdown,save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Shortcuts": {
                            "global": "Meta+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.trash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1080",
                    "DialogWidth": "168"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2.4444444444444446,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 60,
            "minimumLength": 41.77777777777778,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
