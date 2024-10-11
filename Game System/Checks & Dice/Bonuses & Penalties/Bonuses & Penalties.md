---
tags:
  - rules
---
You may gain one or more bonuses or suffer one or more penalties on an action. Each bonus/penalty makes your action easier/more difficult.
Bonuses and penalties are in the form of dice *NdX*, like 2d10, 1d6, 4d8, etc. You first roll your check as normal and then roll bonuses and penalties, which are subtracted from (bonuses) or added to (penalties) your roll to determine your final result and success or failure of your check therefore.

## Bonus/Penalty Types
```dataview
LIST
FROM (#bonus OR #penalty) AND -"_templates"
SORT file.name ASC
```

Multiple bonuses or penalties of the same type do not stack, only the greater one applies.

