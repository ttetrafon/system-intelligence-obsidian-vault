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

The [[Resources#Value & Score|value]] of a condition equals to *10 x damage* applied to it, as with all [[Resources|resources]].

> Your team of adventurers are in a combat encounter against two goblin skirmishers, a goblin shaman, and two domesticated wolves. During the first turn where your groups approach each other with the intention of going into a mêlée you pepper the goblins with arrows (effects 2 & 1) and with cold magic (effect 2). You decide to cause ???

![[conditions.base]]

## Condition Params

### Severity

A resource that acts as a [[Gameplay#Bonuses & Penalties|bonus/penalty]] to relevant to the condition actions. Also acts as a resource that determines when you are ridden of the effect - by reaching zero.

Depending on the type of condition, reaching different levels invokes various bonuses and/or penalties.

#### Terminal

When a condition level reaches 100, it becomes terminal. If it has some terminal effect, that applies and the initial effect ends immediately. If it doesn't, the condition's score/level may keep rising indefinitely.

### Type (Defence)

The type of a condition can be [[Body|body]], [[Mind|mind]], and/or [[Soul|soul]].

#### Defence

Determines the type of defensive checks you make during a condition's progression.

When targeted by the condition you make an [[Endurance|endurance]], [[Willpower|willpower]], or [[Resolve|resolve]] [[Gameplay#Checks|check]] depending on type. This directly reduces the incoming [[Combat#Attack & Damage|damage]] by an amount equal to your check's result, which may result in not suffering the effect at all.

- {!important} If a condition allows for multiple defences, you choose the strongest one among them to make your defensive check.

### Interval

Defines the [[Timekeeping|time interval]] the condition worsens, imposes effects, and/or can be recovered from.

Most conditions can be recovered from. As long as you meet the requirements for recovery, you may attempt a defence check against an effect at every interval.

Also, any repeating negative effects the condition imposes are triggered again at this time interval.

- {!i} Note that intervals may differentiate based on current severity.

### Vector

A vector usually applies only to [[|diseases]], [[|poisons]], and [[|drugs]].

- **contact**:
- **fluids**:
- **ingested**:
- **inhaled**:

### Biology

Usually relevant to [[|diseases]], [[|poisons]], and [[|drugs]], the type of biology determines what creatures may be affected by it. This is generally a [[Descriptors (Tags)#Creatures|creature type, characterisation, or dietary habit]].

### TL/ML

Conditions may have a [[Occult#Magic Level (ML)|ML]] and/or [[Technology#Technology Level (TL)|TL]] depending on how they were triggered.

If the same condition is applied with different MLs or TLs, then the highest between them is retained as relevant.

- {!important} Note that a TL or ML is only assigned if what triggered the condition stays relevant. Shooting someone with a gun and causing bleeding does not assign a TL to the bleeding effect, but using a device to keep a wound open so it keeps bleeding does.

# Exhaustion

...

# Sanity

...


# Resting

...

## Recovery

...

# Death
…

# Health Related Perks
```dataview
LIST
FROM #rules/gameplay/health AND #rules/characters/perk/trait AND -"_templates"
SORT file.name ASC
```
