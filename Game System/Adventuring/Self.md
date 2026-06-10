---
tags:
  - rules/adventuring/realm
---
# Self [[../Characters/Aspects.md|Aspects]]

```dataview
LIST
FROM #rules/characters/aspect/self AND -"_templates"
SORT file.name ASC
```

# Self [[Game System/Characters/Perks|Perks]] & [[Traits]]

```dataview
LIST
FROM (#rules/characters/perk/self OR #rules/characters/trait/self) AND -"_templates" AND -#idea
SORT file.name ASC
``` 
