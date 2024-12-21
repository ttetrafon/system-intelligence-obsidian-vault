---
tags: rules/characters
---
A number of attributes describes your overall prowess with any type of action. Each of them is used to perform different actions and features its own % score. Attributes are what you usually roll when making checks.
Attributes are divided in three categories called attribute traits, **Body**, **Mind**, **Spirit**. Each trait is assigned its relevant category score ([[#Body|body]], ,[[#Mind|mind]], [[#Soul|soul]]).

Attributes are always part of any [[../../Gameplay/Checks & Dice|check]] you make during the game.

### Mod
An attribute's mod is equal to the attribute's score divided by 10, rounded down. Mods are noted with lower case in the test (e.g.: *APP's* mod is written as *App*).

## Category/Trait Score
Each category ([[#Body]]/[[#Mind]]/[[#Soul]]) also has its own score, equal to double the sum of its attributes mods, increased again by double the respective defensive attribute in that category (END, WIL, RES).
> For example, your Mind score is equal to 2*Ima + 2*Mem + 2*Per + 2*Rea + 4*Wil.

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
