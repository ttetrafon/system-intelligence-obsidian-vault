---
tags:
  - rules
---
# [[../Cosmology/Planes of Existence/Prime/Prime|Prime](Prime.md)
```dataview
TABLE WITHOUT ID link(file.name) as "Location", Plane, Fragment, Galaxy, System, Planet, Satellite, Continent, Region, Settlement, District, Neighbourhood, Building, POI, Section, Room
FROM #world AND "World/World Description"
WHERE Plane = "Prime"
SORT Fragment ASC, Galaxy ASC, System ASC, Planet ASC, Satellite ASC, Continent ASC, Region ASC, Settlement ASC, District ASC, Neighbourhood ASC, Building ASC, POI ASC, Section ASC, Room ASC
```


# [[../Cosmology/Planes of Existence/Spirit (Aether)/Spirit (Aether)|Spirit (Aether)](Spirit%20(Aether).md)
```dataview
TABLE WITHOUT ID link(file.name) as "Location", Plane, Fragment, Galaxy, System, Planet, Satellite, Continent, Region, Settlement, District, Neighbourhood, Building, POI, Section, Room
FROM #world AND "World/World Description"
WHERE Plane = "Aether"
SORT Fragment ASC, Galaxy ASC, System ASC, Planet ASC, Satellite ASC, Continent ASC, Region ASC, Settlement ASC, District ASC, Neighbourhood ASC, Building ASC, POI ASC, Section ASC, Room ASC
```


# [[../Cosmology/Planes of Existence/Matrix/Matrix|Matrix](World/Cosmology/Planes%20of%20Existence/Matrix.md)
```dataview
TABLE WITHOUT ID link(file.name) as "Location", Plane, Fragment, Galaxy, System, Planet, Satellite, Continent, Region, Settlement, District, Neighbourhood, Building, POI, Section, Room
FROM #world AND "World/World Description"
WHERE Plane = "Matrix"
SORT Fragment ASC, Galaxy ASC, System ASC, Planet ASC, Satellite ASC, Continent ASC, Region ASC, Settlement ASC, District ASC, Neighbourhood ASC, Building ASC, POI ASC, Section ASC, Room ASC
```


# [[../Cosmology/Planes of Existence/Far Realm (Void)/Far Realm (Void)|Far Realm (Void)](Far%20Realm%20(Void).md)
```dataview
TABLE WITHOUT ID link(file.name) as "Location", Plane, Fragment, Galaxy, System, Planet, Satellite, Continent, Region, Settlement, District, Neighbourhood, Building, POI, Section, Room
FROM #world AND "World/World Description"
WHERE Plane = "Void"
SORT Fragment ASC, Galaxy ASC, System ASC, Planet ASC, Satellite ASC, Continent ASC, Region ASC, Settlement ASC, District ASC, Neighbourhood ASC, Building ASC, POI ASC, Section ASC, Room ASC
```


# Unbound Locations
```dataview
TABLE WITHOUT ID link(file.name) as "Location", Fragment, Galaxy, System, Planet, Satellite, Continent, Region, Settlement, District, Neighbourhood, Building, POI, Section, Room
FROM #world AND "World/World Description"
WHERE Plane = "---"
SORT Fragment ASC, Galaxy ASC, System ASC, Planet ASC, Satellite ASC, Continent ASC, Region ASC, Settlement ASC, District ASC, Neighbourhood ASC, Building ASC, POI ASC, Section ASC, Room ASC
```

