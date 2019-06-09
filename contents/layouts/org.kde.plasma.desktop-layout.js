var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "800",
                    "DialogWidth": "1420"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "arrangement": "1",
                    "iconSize": "3",
                    "positions": "20,10,desktop:/Home.desktop,0,1,desktop:/Your Stuff Here,2,1,desktop:/OneDrive,1,1,desktop:/trash:⁄.desktop,19,9",
                    "previews": "false",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/sem/Pictures/Wallpapers/Unsplash/Starry Nebula 219.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "761",
                    "DialogWidth": "1194"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1890"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/sem/.local/share/wallpapers/Aritim-Light-Wallpaper-1920x1080.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
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
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/sem/Pictures/Wallpapers/sea_shore_minimalism_100029_1920x1080.jpg"
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
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
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
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "customButtonImage": "start-here-manjaro",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Configuration/General": {
                            "customButtonImage": "start-here-manjaro",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/General": {
                            "customButtonImage": "start-here-kde",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
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
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
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
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
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
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
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
                    "plugin": "org.kde.plasma.appmenu"
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
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
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
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:telegramdesktop.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:virtualbox.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        },
                        "/Configuration/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:telegramdesktop.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:virt-manager.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        },
                        "/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:telegramdesktop.desktop,applications:firefox.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:emacs.desktop,applications:virtualbox.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
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
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "11"
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
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
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
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
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
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Advanced": {
                            "interfacesWhitelist": "wlp2s0",
                            "interfacesWhitelistEnabled": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "noteId": "677f07c8-b2ce-4f92-bb65-76e3fb4c08"
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
                            "PreloadWeight": "59"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "1104"
                        },
                        "/Configuration/General": {
                            "issueState": "all",
                            "repoList": "Mrcuve0/Aritim-Dark-KDE,Mrcuve0/Aritim-Light-KDE,Mrcuve0/Aritim-Dark-GTK,Mrcuve0/IOTA-sems-spammer-promoter",
                            "showHeading": "false"
                        }
                    },
                    "plugin": "com.github.zren.githubissues"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "96",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/Containments/8": {
                            "formfactor": "2"
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
                            "PreloadWeight": "83"
                        }
                    },
                    "plugin": "gr.ictpro.jsalatas.plasma.pstate"
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
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
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
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Calendar": {
                            "firstDayOfWeek": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "755",
                            "DialogWidth": "1322"
                        },
                        "/Configuration/General": {
                            "clock_line_2_height_ratio": "0.37",
                            "clock_timeformat": "HH:mm:ss",
                            "pin": "true"
                        },
                        "/Configuration/Google%20Calendar": {
                            "access_token": "ya29.GlwjBxakZBOdqEhXjTHM-JcfhyJn1rKFfPZBrLWcuBPmfsb0skVpD9hwFtEuwEe42J-T3L-scrwQldczwd5lWo7EdEvF8olAHKNqmPNFo3MYhjycp7h5u-js5YisOQ",
                            "access_token_expires_at": "1012897531",
                            "access_token_type": "Bearer",
                            "calendar_id_list": "it.italian#holiday@group.v.calendar.google.com,giabertini93@gmail.com,1cjbme2p9foj64p4n5ruqdafsrk8auit@import.calendar.google.com,07s0t9f8dns8o1ngpumiq53lor62f8i3@import.calendar.google.com,jd0atjkst1r2oaebhj5v7e8eaqfnejlg@import.calendar.google.com,0nlq9virr37ehdk5q0gjga246nl0u94q@import.calendar.google.com,b4352qf8k227bab8tjdup61a8b1a3dgl@import.calendar.google.com",
                            "calendar_list": "W3sia2luZCI6ImNhbGVuZGFyI2NhbGVuZGFyTGlzdEVudHJ5IiwiZXRhZyI6IlwiMTUzNjg3MTA2MTExOTAwMFwiIiwiaWQiOiJiNDM1MnFmOGsyMjdiYWI4dGpkdXA2MWE4YjFhM2RnbEBpbXBvcnQuY2FsZW5kYXIuZ29vZ2xlLmNvbSIsInN1bW1hcnkiOiJodHRwczovL3d3dy50cmFpbmxpbmUuZXUvY2FsZW5kYXJzL3hoeHV1bnJxcHBlYmtzZGJneWtheGdlcWJhZmh1a2NjbGIuaWNzIiwidGltZVpvbmUiOiJVVEMiLCJzdW1tYXJ5T3ZlcnJpZGUiOiJUcmFpbkxpbmUiLCJjb2xvcklkIjoiOSIsImJhY2tncm91bmRDb2xvciI6IiM3YmQxNDgiLCJmb3JlZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwic2VsZWN0ZWQiOnRydWUsImFjY2Vzc1JvbGUiOiJyZWFkZXIiLCJkZWZhdWx0UmVtaW5kZXJzIjpbXSwiY29uZmVyZW5jZVByb3BlcnRpZXMiOnsiYWxsb3dlZENvbmZlcmVuY2VTb2x1dGlvblR5cGVzIjpbImV2ZW50SGFuZ291dCJdfX0seyJraW5kIjoiY2FsZW5kYXIjY2FsZW5kYXJMaXN0RW50cnkiLCJldGFnIjoiXCIxNTUxMDA2MTQ1NzQ2MDAwXCIiLCJpZCI6IjFjamJtZTJwOWZvajY0cDRuNXJ1cWRhZnNyazhhdWl0QGltcG9ydC5jYWxlbmRhci5nb29nbGUuY29tIiwic3VtbWFyeSI6Imh0dHA6Ly93d3cuc3dhcy5wb2xpdG8uaXQvZG90bmV0L29yYXJpX2xlemlvbmVfcHViL0V4cG9ydF9pY3MuYXNweD9pZF9pbXQ9MTQyNDMyJm51bWNvcj0wJmFfYWNjPTIwMTkmcGQ9MiIsInRpbWVab25lIjoiRXVyb3BlL1JvbWUiLCJzdW1tYXJ5T3ZlcnJpZGUiOiJQcm9qZWN0cyBhbmQgTGFib3JhdG9yeSBvbiBDb21tdW5pY2F0aW9uIFN5c3RlbXMiLCJjb2xvcklkIjoiNiIsImJhY2tncm91bmRDb2xvciI6IiNmZmFkNDYiLCJmb3JlZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwic2VsZWN0ZWQiOnRydWUsImFjY2Vzc1JvbGUiOiJyZWFkZXIiLCJkZWZhdWx0UmVtaW5kZXJzIjpbXSwiY29uZmVyZW5jZVByb3BlcnRpZXMiOnsiYWxsb3dlZENvbmZlcmVuY2VTb2x1dGlvblR5cGVzIjpbImV2ZW50SGFuZ291dCJdfX0seyJraW5kIjoiY2FsZW5kYXIjY2FsZW5kYXJMaXN0RW50cnkiLCJldGFnIjoiXCIxNTUxMDA2MTQ5ODM2MDAwXCIiLCJpZCI6IjBubHE5dmlycjM3ZWhkazVxMGdqZ2EyNDZubDB1OTRxQGltcG9ydC5jYWxlbmRhci5nb29nbGUuY29tIiwic3VtbWFyeSI6Imh0dHA6Ly93d3cuc3dhcy5wb2xpdG8uaXQvZG90bmV0L29yYXJpX2xlemlvbmVfcHViL0V4cG9ydF9pY3MuYXNweD9pZF9pbXQ9MTQ5NDU0Jm51bWNvcj0wJmFfYWNjPTIwMTkmcGQ9MiIsInRpbWVab25lIjoiRXVyb3BlL1JvbWUiLCJzdW1tYXJ5T3ZlcnJpZGUiOiJTeW50aGVzaXMgYW5kIE9wdGltaXphdGlvbiBvZiBEaWdpdGFsIFN5c3RlbXMiLCJjb2xvcklkIjoiMTkiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjYzJjMmMyIiwiZm9yZWdyb3VuZENvbG9yIjoiIzAwMDAwMCIsInNlbGVjdGVkIjp0cnVlLCJhY2Nlc3NSb2xlIjoicmVhZGVyIiwiZGVmYXVsdFJlbWluZGVycyI6W10sImNvbmZlcmVuY2VQcm9wZXJ0aWVzIjp7ImFsbG93ZWRDb25mZXJlbmNlU29sdXRpb25UeXBlcyI6WyJldmVudEhhbmdvdXQiXX19LHsia2luZCI6ImNhbGVuZGFyI2NhbGVuZGFyTGlzdEVudHJ5IiwiZXRhZyI6IlwiMTU1MTAwNjE0MTMzMTAwMFwiIiwiaWQiOiIwN3MwdDlmOGRuczhvMW5ncHVtaXE1M2xvcjYyZjhpM0BpbXBvcnQuY2FsZW5kYXIuZ29vZ2xlLmNvbSIsInN1bW1hcnkiOiJodHRwOi8vd3d3LnN3YXMucG9saXRvLml0L2RvdG5ldC9vcmFyaV9sZXppb25lX3B1Yi9FeHBvcnRfaWNzLmFzcHg/aWRfaW10PTE0ODg2MyZudW1jb3I9MCZhX2FjYz0yMDE5JnBkPTIiLCJ0aW1lWm9uZSI6IkV1cm9wZS9Sb21lIiwic3VtbWFyeU92ZXJyaWRlIjoiTWljcm9lbGVjdHJvbmljcyBTeXN0ZW1zIiwiY29sb3JJZCI6IjE3IiwiYmFja2dyb3VuZENvbG9yIjoiIzlhOWNmZiIsImZvcmVncm91bmRDb2xvciI6IiMwMDAwMDAiLCJzZWxlY3RlZCI6dHJ1ZSwiYWNjZXNzUm9sZSI6InJlYWRlciIsImRlZmF1bHRSZW1pbmRlcnMiOltdLCJjb25mZXJlbmNlUHJvcGVydGllcyI6eyJhbGxvd2VkQ29uZmVyZW5jZVNvbHV0aW9uVHlwZXMiOlsiZXZlbnRIYW5nb3V0Il19fSx7ImtpbmQiOiJjYWxlbmRhciNjYWxlbmRhckxpc3RFbnRyeSIsImV0YWciOiJcIjE1NTEwMDYxNDcyMDIwMDBcIiIsImlkIjoiamQwYXRqa3N0MXIyb2FlYmhqNXY3ZThlYXFmbmVqbGdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20iLCJzdW1tYXJ5IjoiaHR0cDovL3d3dy5zd2FzLnBvbGl0by5pdC9kb3RuZXQvb3JhcmlfbGV6aW9uZV9wdWIvRXhwb3J0X2ljcy5hc3B4P2lkX2ltdD0xNDg4OTEmbnVtY29yPTAmYV9hY2M9MjAxOSZwZD0yIiwidGltZVpvbmUiOiJFdXJvcGUvUm9tZSIsInN1bW1hcnlPdmVycmlkZSI6IlNvZnR3YXJlIEVuZ2luZWVyaW5nIiwiY29sb3JJZCI6IjQiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjZmE1NzNjIiwiZm9yZWdyb3VuZENvbG9yIjoiIzAwMDAwMCIsInNlbGVjdGVkIjp0cnVlLCJhY2Nlc3NSb2xlIjoicmVhZGVyIiwiZGVmYXVsdFJlbWluZGVycyI6W10sImNvbmZlcmVuY2VQcm9wZXJ0aWVzIjp7ImFsbG93ZWRDb25mZXJlbmNlU29sdXRpb25UeXBlcyI6WyJldmVudEhhbmdvdXQiXX19LHsia2luZCI6ImNhbGVuZGFyI2NhbGVuZGFyTGlzdEVudHJ5IiwiZXRhZyI6IlwiMTUzNjg2NDM4Njg5NTAwMFwiIiwiaWQiOiJnaWFiZXJ0aW5pOTNAZ21haWwuY29tIiwic3VtbWFyeSI6ImdpYWJlcnRpbmk5M0BnbWFpbC5jb20iLCJ0aW1lWm9uZSI6IkV1cm9wZS9Sb21lIiwiY29sb3JJZCI6IjE0IiwiYmFja2dyb3VuZENvbG9yIjoiIzlmZTFlNyIsImZvcmVncm91bmRDb2xvciI6IiMwMDAwMDAiLCJzZWxlY3RlZCI6dHJ1ZSwiYWNjZXNzUm9sZSI6Im93bmVyIiwiZGVmYXVsdFJlbWluZGVycyI6W3sibWV0aG9kIjoicG9wdXAiLCJtaW51dGVzIjozMH1dLCJub3RpZmljYXRpb25TZXR0aW5ncyI6eyJub3RpZmljYXRpb25zIjpbeyJ0eXBlIjoiZXZlbnRDcmVhdGlvbiIsIm1ldGhvZCI6ImVtYWlsIn0seyJ0eXBlIjoiZXZlbnRDaGFuZ2UiLCJtZXRob2QiOiJlbWFpbCJ9LHsidHlwZSI6ImV2ZW50Q2FuY2VsbGF0aW9uIiwibWV0aG9kIjoiZW1haWwifSx7InR5cGUiOiJldmVudFJlc3BvbnNlIiwibWV0aG9kIjoiZW1haWwifV19LCJwcmltYXJ5Ijp0cnVlLCJjb25mZXJlbmNlUHJvcGVydGllcyI6eyJhbGxvd2VkQ29uZmVyZW5jZVNvbHV0aW9uVHlwZXMiOlsiZXZlbnRIYW5nb3V0Il19fSx7ImtpbmQiOiJjYWxlbmRhciNjYWxlbmRhckxpc3RFbnRyeSIsImV0YWciOiJcIjE1NTI2NzA5OTA1NjYwMDBcIiIsImlkIjoiYWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29tIiwic3VtbWFyeSI6IkNvbnRhY3RzIiwidGltZVpvbmUiOiJFdXJvcGUvUm9tZSIsInN1bW1hcnlPdmVycmlkZSI6IkJpcnRoZGF5cyIsImNvbG9ySWQiOiIxMyIsImJhY2tncm91bmRDb2xvciI6IiM5MmUxYzAiLCJmb3JlZ3JvdW5kQ29sb3IiOiIjMDAwMDAwIiwic2VsZWN0ZWQiOnRydWUsImFjY2Vzc1JvbGUiOiJyZWFkZXIiLCJkZWZhdWx0UmVtaW5kZXJzIjpbXSwiY29uZmVyZW5jZVByb3BlcnRpZXMiOnsiYWxsb3dlZENvbmZlcmVuY2VTb2x1dGlvblR5cGVzIjpbImV2ZW50SGFuZ291dCJdfX0seyJraW5kIjoiY2FsZW5kYXIjY2FsZW5kYXJMaXN0RW50cnkiLCJldGFnIjoiXCIxNTMzMzgyNjIzNDE0MDAwXCIiLCJpZCI6Iml0Lml0YWxpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20iLCJzdW1tYXJ5IjoiRmVzdGl2aXTDoCBpbiBJdGFsaWEiLCJ0aW1lWm9uZSI6IkV1cm9wZS9Sb21lIiwiY29sb3JJZCI6IjgiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjMTZhNzY1IiwiZm9yZWdyb3VuZENvbG9yIjoiIzAwMDAwMCIsInNlbGVjdGVkIjp0cnVlLCJhY2Nlc3NSb2xlIjoicmVhZGVyIiwiZGVmYXVsdFJlbWluZGVycyI6W10sImNvbmZlcmVuY2VQcm9wZXJ0aWVzIjp7ImFsbG93ZWRDb25mZXJlbmNlU29sdXRpb25UeXBlcyI6WyJldmVudEhhbmdvdXQiXX19XQ==",
                            "events_pollinterval": "60",
                            "refresh_token": "1/cQspCq4jieKFe3fA1hKoyrSCBAZes3I1ylACA0C6q4o"
                        },
                        "/Configuration/Weather": {
                            "weather_city_id": "3165524"
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
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
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
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
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
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
