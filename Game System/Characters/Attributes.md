---
tags: rules/characters
---
A number of attributes describes your overall prowess with any type of action. Each of them is used to perform different actions and features its own score (d4, d6, d8, …). Attributes are what you usually roll when making checks.
Attributes are divided in three categories called attribute traits, **Body**, **Mind**, **Spirit**. Each trait is assigned its relevant category score ([[#Body|body]], ,[[#Mind|mind]], [[#Soul|soul]]).

Attributes are always part of any [[../Gameplay.md|check]] you make during the game.

## Category/Trait Score
Each category ([[#Body]]/[[#Mind]]/[[#Soul]]) also has its own score, equal to the median of its attribute scores or [[Endurance (END)|END](Attributes/Endurance%20(END).md)/[[Willpower (WIL)|WIL](Attributes/Willpower%20(WIL).md)/[[Resolve (RES)|RES](Attributes/Resolve%20(RES).md), whichever is higher.
> For example, your Mind attributes are d8/d4/d12/d20/d6, so your Mind score is d8.
> Similarly, if your scores where instead d8/d4/d6/d20/d12, your Mind score would be d12 since the median of d8 is lower than your current WIL score.

- [I] A trait score is updated immediately when any of its attributes changes.

### Defensive Check
Whenever you suffer [[../Gameplay/Timekeeping.md#Damage|damage]] you are allowed an appropriate defensive check. The defensive check is a [[#Category/Trait Score|trait]] check. The [[../Gameplay.md#Difficulty & Degree of Success/Failure (DoS/DoF)|DoS]] of this check reduces the damage on 1-1 rate, which may reduce the severity of the incoming [[Health#Injury|injury]]/[[Health#Effects|effect]], or even outright negate it.

# Body
```dataview
LIST
FROM #rules/characters/attribute AND #body AND -"_templates"
SORT file.name ASC
```


# Mind
```dataview
LIST
FROM #rules/characters/attribute AND #mind AND -"_templates"
SORT file.name ASC
```


# Soul
```dataview
LIST
FROM #rules/characters/attribute AND #spirit AND -"_templates"
SORT file.name ASC
```
