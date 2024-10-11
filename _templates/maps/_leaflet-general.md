```leaflet
# The id is used to store the map pins, so maps sharing their id will have the same pins.
id: something_unique_2

# Settings
lock: true
recenter: false

# Image (each image in the list is a different layer)
image:
- [[obsidian logo.png|LayerName]]
width: 75%
height: 750px
darkMode: false
bounds: [[0,0],[120,120]]

# Starting location
lat: 60
long: 60

# Zoom
maxZoom: 3
minZoom: -1
defaultZoom: 1
zoomDelta: 0.5

# Units
unit: m
scale: 1
```

### Calculations
- Note the image size (in px)
- If the map has a scale, count the px that correspond to the scale provided.
	- If there is no scale, decide some distance in the map is (in units) and then measure that in px.
- Get the ratio of scale/units.
- Divide the map size with the ratio to get the bounds (form: `[[0,0][y,x]]`).

#### Example
- scale 275 / units on map 25 = 11
- width 2048 -> bounds.x 2048/11=186, centre.x 186/2=93
- height 1642 -> bounds.y 1642/11=150, centre.y 75
