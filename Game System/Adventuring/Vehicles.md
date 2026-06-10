---
tags:
  - rules/adventuring/realm
---
# Vehicle [[../Characters/Aspects.md|Aspects]]
```dataview
LIST
FROM #rules/characters/aspect/vehicles AND -"_templates"
SORT file.name ASC
```

# Vehicle [[Game System/Characters/Perks|Perks]] & [[Traits]]

```dataview
LIST
FROM (#rules/characters/perk/vehicle OR #rules/characters/trait/vehicle) AND -"_templates" AND -#idea
SORT file.name ASC
``` 
