---
tags:
  - world/location
Type: fragment
Plane: Aether
Fragment: Deep Aether
Galaxy: 
System: 
Planet: 
Satellite: 
Continent: 
Region: 
Settlement: 
District: 
Neighbourhood: 
Building: 
POI: 
Section: 
Room:
description: ...
random-encounters-level-none: 1
random-encounters-level-natural-feature: 4
random-encounters-level-local-fauna-flora: 10
random-encounters-level-intelligents: 16
random-encounters-level-unnatural-feature: 20
---
# Description
```meta-bind-js-view
{Type} as type
{Plane} as plane
{Fragment} as fragment
{Galaxy} as galaxy
{System} as system
{Planet} as planet
{Satellite} as satellite
{Continent} as continent
{Region} as region
{Settlement} as settlement
{District} as district
{Neighbourhood} as neighbourhood
{Building} as building
{POI} as poi
{Section} as section
{Room} as room
---
let res = "###### *Location*: ";
switch(context.bound.plane) {
	case "Prime":
		res += "[[../../World/Cosmology/Planes of Existence/Prime/Prime|Prime]]";
		break;
	case "Aether":
		res += "[[../../World/Cosmology/Planes of Existence/Spirit (Aether)/Spirit (Aether)|Spirit (Aether)]]";
		break;
	case "Matrix":
		res += "[[../../World/Cosmology/Planes of Existence/Matrix/Matrix|Matrix]]";
		break;
	case "Void":
		res += "[[../../World/Cosmology/Planes of Existence/Far Realm (Void)/Far Realm (Void)|Far Realm (Void)]]";
		break;
	default:
		res += "???";
		break;
}
res += context.bound.fragment != "" ? ` -> [[${context.bound.fragment}]]` : "";
res += context.bound.galaxy != "" ? ` -> [[${context.bound.galaxy}]]` : "";
res += context.bound.system != "" ? ` -> [[${context.bound.system}]]` : "";
res += context.bound.planet != "" ? ` -> [[${context.bound.planet}]]` : "";
res += context.bound.satellite != "" ? ` -> [[${context.bound.satellite}]]` : "";
res += context.bound.continent != "" ? ` -> [[${context.bound.continent}]]` : "";
res += context.bound.region != "" ? ` -> [[${context.bound.region}]]` : "";
res += context.bound.settlement != "" ? ` -> [[${context.bound.settlement}]]` : "";
res += context.bound.district != "" ? ` -> [[${context.bound.district}]]` : "";
res += context.bound.neighbourhood != "" ? ` -> [[${context.bound.neighbourhood}]]` : "";
res += context.bound.building != "" ? ` -> [[${context.bound.building}]]` : "";
res += context.bound.poi != "" ? ` -> [[${context.bound.poi}]]` : "";
res += context.bound.section != "" ? ` -> [[${context.bound.section}]]` : "";
res += context.bound.room != "" ? ` -> [[${context.bound.room}]]` : "";
return engine.markdown.create(res);
```





---
```dataview
TABLE WITHOUT ID link(file.name) as "Location", Type, Galaxy, System, Planet, Satellite, Continent, Region, Settlement, District, Neighbourhood, Building, POI, Section, Room
FROM #world AND "World/World Description"
WHERE Plane = "Aether" AND Fragment = "Deep Aether" AND file.name != "Deep Aether"
SORT Galaxy ASC, System ASC, Planet ASC, Satellite ASC, Continent ASC, Region ASC, Settlement ASC, District ASC, Neighbourhood ASC, Building ASC, POI ASC, Section ASC, Room ASC
```
---
# Categorisation
**Type**: `INPUT[location-type][:Type]`
**Plane**: `INPUT[plane-of-existence][:Plane]`
**Fragment**: `INPUT[text:Fragment]`
**Galaxy**: `INPUT[text:Galaxy]`
**System**: `INPUT[text:System]`
**Planet**: `INPUT[text:Planet]`
**Satellite**: `INPUT[text:Satellite]`
**Continent**: `INPUT[text:Continent]`
**Region**: `INPUT[text:Region]`
**Settlement**: `INPUT[text:Settlement]`
**District**: `INPUT[text:District]`
**Neighbourhood**: `INPUT[text:Neighbourhood]`
**Building**: `INPUT[text:Building]`
**POI**: `INPUT[text:POI]`
**Section**: `INPUT[text:Section]`
**Room**: `INPUT[text:Room]`
