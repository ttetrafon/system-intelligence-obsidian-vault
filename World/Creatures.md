---
tags:
  - rules
---
...

## Species

```dataview
LIST
FROM #world/creatures/species AND -"_templates"
SORT file.name ASC
```

## Creature Templates

```dataview
LIST
FROM #world/creatures/creature-template AND -"_templates"
SORT file.name ASC
```
