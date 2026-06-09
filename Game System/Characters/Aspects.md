---
tags:
  - rules/characters
---
The aspects you have define your life experiences and are split in several [[Adventuring#Adventuring Realms|adventuring realms]]

Aspects act as resources and are most often included in relevant [[Gameplay#Checks|checks]] (as parts of an [[Adventuring#Actions|action]]).

Both the adventuring realm and aspect scores determine your level of experience, and are used directly as part of all checks.

Each adventuring realm features also a value and score to be used for checks. Its value though depends on all its aspects, and it is half of the highest aspect's value in that realm.

```dataview
LIST
FROM #rules/characters/aspect AND -"_templates" AND -#idea
SORT file.name ASC
```
