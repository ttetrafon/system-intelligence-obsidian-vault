 A map is added as a leaflet code block.
```leaflet
id: something_unique
lock: true

# Image
image:
- [[obsidian logo.png|Obsidian outer!]]
- [[obsidian logo.png|Obsidian inner!]]
width: 60%
height: 600px
darkMode: false

# Starting location
lat: 50
long: 50

# Zoom (allowed 0 - 18)
maxZoom: 18
minZoom: 0
defaultZoom: 15
zoomDelta: 0.5

# Units
unit: m
scale: 1
```

**Map pins** need to be added from leaflet's settings.
- Icons can be anything.
- Layer icon means that it is presented inside an inverted pin.
- Min/Max zoom can be used to control when the icon is hidden on the map depending on the zoom level.
- Note that layers do not share pins.

Simple stuff can be drawn on the map, from the bottom-right controls in the map.
