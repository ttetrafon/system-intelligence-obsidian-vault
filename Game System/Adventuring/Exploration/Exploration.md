---
tags:
  - rules/adventuring/domain
---
# Distances
```dataview
TABLE WITHOUT ID link(file.name) as "Distance", travel-time as "Magic/Tech Travel Time", description as Description
FROM #rules/gameplay/distance and -"_templates"
SORT index ASC 
```

# Exploration [[../../Characters/Aspects/Aspects|Aspects]]
```dataview
LIST
FROM #rules/characters/aspect/exploration AND -"_templates"
SORT file.name ASC
```
