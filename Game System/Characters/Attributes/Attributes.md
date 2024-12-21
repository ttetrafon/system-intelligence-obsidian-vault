---
tags: rules/characters
---
A number of attributes describes your overall prowess with any type of action. Each of them is used to perform different actions and features its own score (d4, d6, d8, …). Attributes are what you usually roll when making checks.
Attributes are divided in three categories called attribute traits, **Body**, **Mind**, **Spirit**. Each trait is assigned its relevant category score ([[#Body|body]], ,[[#Mind|mind]], [[#Soul|soul]]).

Attributes are always part of any [[../../Gameplay/Checks & Dice|check]] you make during the game.

## Category/Trait Score
Each category ([[#Body]]/[[#Mind]]/[[#Soul]]) also has its own score, equal to the median of its attribute scores or [[Endurance (END)|END]]/[[Willpower (WIL)|WIL]]/[[Resolve (RES)|RES]], whichever is higher.
> For example, your Mind attributes are d8/d4/d12/d20/d6, so your Mind score is d8.
> Similarly, if your scores where instead d8/d4/d6/d20/d12, your Mind score would be d12 since the median of d8 is lower than your current WIL score.

- [I] A trait score is updated immediately when any of its attributes changes.

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
