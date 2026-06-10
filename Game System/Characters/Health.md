---
tags:
  - rules/characters
---
...

# Injury

When you suffer [[|damage]] that does not cause some specific [[#Conditions|condition]], you become injured.

You have three resource scores of damage available, **body**, **mind**, and **spirit**, and incoming damage may be directed to any of them. When you suffer damage #, one of your injury scores increases by that amount automatically.

> During combat, enemy archers have managed to shoot some arrows to you, dealing a total of 3 damage. Your body injury score was at 2 (value of 23). With the extra damage, it changes to 5 (value of 53).

While injured, you suffer a [[Gameplay#Bonuses & Penalties|penalty]] to all relevant [[Gameplay#Checks|checks]] equal to your injury score. Furthermore, as long as you are injured, any check you attempt (relevant to each injury score) rolls under your current injury level makes you [[|incapacitated]] (score equal to the check result).

> During the combat above, you attempt to attack yourself with your sword and roll a 3. You immediately become incapacitated 3 (30), since your roll was lower than your current body injury score of 5. Later, you also roll a 4 on some athletics check, which increases your incapacitated score to 7 (70).

# Conditions

A condition is something that affects a creature for some time, and can be either positive, negative, or both at the same time.

These include:
- banes
- boons
- diseases
- poisons
- drugs

You suffer [[damage]] during encounters, from enemies or the environment (combat/social encounters, dangerous terrain, etc) at a ratio of *1 [[Gameplay#Effect|effect]]-to-1 [[damage]]*. This damage can either be directed to your **body**, **mind**, or **soul**, depending on the situation and is immediately translated to some condition(s) at the end of the turn. Because of that, resistances apply only to the total damage and condition scores.

The effective score of a condition equals to *10 x damage* applied to it, as with all [[Resources|resources]].

> Your team of adventurers are in a combat encounter against two goblin skirmishers, a goblin shaman, and two domesticated wolves. During the first turn where your groups approach each other with the intention of going into a mêlée you pepper the goblins with arrows (effects 2 & 1) and with cold magic (effect 2). You decide to cause ???


# Exhaustion

...

# Sanity

...

# Recovery

...

# Damage Immunity, Resistance, & Vulnerability

...

# Death
…

# Health Related Perks
```dataview
LIST
FROM #rules/gameplay/health AND #rules/characters/perk/trait AND -"_templates"
SORT file.name ASC
```
