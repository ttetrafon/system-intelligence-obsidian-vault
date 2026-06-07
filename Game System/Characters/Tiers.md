---
tags:
  - rules/characters
---
Tiers describe your level of experience and/or expertise.

Each tier is an [[Resources|resource]]. When you are supposed to increase a tier, you make an [[Resources#Expenditure/Accumulation|accumulation]] check against its current score.

```dataview
LIST
FROM #rules/characters/tier AND -"_templates"
SORT file.name ASC
```

- {!i} Note that tiers do not have a maximum score, so their progress is infinite.
