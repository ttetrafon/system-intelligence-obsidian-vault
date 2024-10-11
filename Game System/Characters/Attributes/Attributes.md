---
tags: rules
---
A number of attributes describes your overall prowess with any type of action. Each of them is used to perform different actions and features its own % score. Attributes are what you usually roll when making checks.
Attributes are divided in three categories called attribute traits, **Body**, **Mind**, **Spirit**. Each trait is assigned its relevant category score (body, mind, spirit).

## Mod
An attribute's mod is equal to the attribute's score divided by 10, rounded down. Mods are noted with lower case in the test (e.g.: *APP's* mod is written as *App*).

## Attribute Checks
The vast majority of checks during the game use your attributes. Attribute checks, depending on the action at hand, with a [[../../Checks & Dice/Bonuses & Penalties/Morale|morale]] [[../../Checks & Dice/Bonuses & Penalties/Bonuses & Penalties|bonus/penalty]] on your final result from the appropriate ❗morality score.
> For example, you make a Sneak check with DEX 75 while trying to hide from an monster which is prowling the city streets while you hear echoes of a party luring the creature in. You have a Valorous (d12) - Cowardly (d6) trait, so may suffer a -1 penalty on your degree of success because of your current Valorous score. If the same situation repeated in the woods, where nobody would be in direct danger, you wouldn't suffer any penalty or gain any bonus due to your current Cowardly score.

## Category/Trait Score
Each category also has its own score, equal to double the sum of its attributes mods, increased again by double the respective defensive attribute in that category (END, WIL, RES).
> For example, your Mind score is equal to 2*Ima + 2*Mem + 2*Per + 2*Rea + 4*Wil.

- [!] A trait score is updated immediately when any of its attributes changes.

[[../Aspects, Skills, & Perks/perks/Sound of Body|Sound of Body]]
[[../Aspects, Skills, & Perks/perks/Sound of Mind|Sound of Mind]]
[[../Aspects, Skills, & Perks/perks/Sound of Spirit|Sound of Spirit]]


# Body
```dataview
LIST
FROM #attribute AND #body AND -"_templates"
SORT file.name ASC
```


# Mind
```dataview
LIST
FROM #attribute AND #mind AND -"_templates"
SORT file.name ASC
```


# Soul
```dataview
LIST
FROM #attribute AND #spirit AND -"_templates"
SORT file.name ASC
```

