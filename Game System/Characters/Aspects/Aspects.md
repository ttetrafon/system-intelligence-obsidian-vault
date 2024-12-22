---
tags:
  - rules/characters
---
Aspects are what defines your life experiences and what you can do!

Aspect are categorised in a few general adventuring domains:
```dataview
LIST
FROM #rules/adventuring/domain AND -"_templates"
SORT file.name ASC
```

Each domain then contains a number of aspects that are part of the domain.

```dataview
LIST
FROM #rules/characters/aspect AND -"_templates"
SORT file.name ASC
```

Aspects are generalised, logical groupings of actions. Differentiation within them then comes by their combination with [[../Attributes/Attributes|attributes]].
> For example, Thievery, when used with PER, can be your ability to find mechanical traps, with TEC your ability to disarm a mechanical trap, with EMP your ability to discern you are being conned, and so on.

Each aspect has a score (0, d4, d6, d8, …), which determines how experienced and trained around performing actions covered by that aspect.
Scores are associated with proficiency:
- untrained: 0
- novice: d4
- apprentice: d6
- adept: d8
- expert: d10
- master: d12
- grandmaster: d20+

