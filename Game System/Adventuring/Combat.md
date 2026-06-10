---
tags:
  - rules/adventuring/realm
---
While adventuring, you will find yourself facing adversity that oftentimes escalates into combat, either in the form of a skirmish between small groups of people or war between nations or organisations.

# Combat [[../Characters/Aspects.md|]]

```dataview
LIST
FROM #rules/characters/aspect/combat AND -"_templates"
SORT file.name ASC
```

# Combat [[Game System/Characters/Perks|Perks]] & [[Traits]]

```dataview
LIST
FROM (#rules/characters/perk/combat OR #rules/characters/trait/combat) AND -"_templates" AND -#idea
SORT file.name ASC
``` 
