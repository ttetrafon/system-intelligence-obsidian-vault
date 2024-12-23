---
tags:
  - rules/characters
---
As a creature, you have senses - means to perceive your environment. You can use these senses to perceive your environment.

##### Passive & Active Senses
Senses are divided into ***passive*** and ***active***. Most senses are passive, meaning that to perceive something, something else must first emit the appropriate stimulant (like normal vision through light reflected on objects, or sound caused by someone speaking or walking). An active sense emits itself the stimulant required to perceive the world (like pings created by a sonar to scan an area).

##### Sensitive Senses
A sense may also have the ***sensitive*** property, meaning that it operates even with minimal sensory input, like a cat's ability to see at night.

##### Sensory Organs
Vision modes depend on some physical or magical sensory organ you possess. If that sensory organ is disabled or lost, then the corresponding vision mode becomes unavailable.

##### Range
Each vision mode has a specific ❗range depending on its source. The range is not absolute, it just means that beyond this range you suffer disadvantage on checks. Usually, a sense will allow you to notice things up to 1 step beyond this range.

##### Truesight
In addition to your normal senses, you may enjoy truesight, which augments all the other modes of vision you already have. Truesight defeats all magical manipulation of your senses or magical ways to hide and/or change the natural shape of an item/environment/creature.

##### Piercing
A vision mode may be augmented to become piercing. A piercing vision mode ignores obstacles that would normally block that type of vision, and so it extends unimpeded to its maximum range.

# Senses
```dataview
LIST
FROM #rules/characters/sense AND -"_templates"
SORT file.name ASC
```

# Senses Perks
```dataview
LIST
FROM #rules/characters/perk AND #rules/characters/senses AND -"_templates"
SORT file.name ASC
```

# Visibility
Depending on the environmental conditions, an area will be considered **bright**, **lightly obscured**, **heavily obscured**, or **dark**, for each of the senses you may have (not the same descriptor will apply to all senses).
- A bright area is perfect for the senses.
- A lightly obscured area (dim light, patchy fog, moderate foliage, etc) imposes disadvantage on all senses checks based on the sense that is blocked, and limits their range to short.
- A heavily obscured area (darkness, opaque fog, dense foliage, etc) appropriate senses to an immediate range. Senses checks also suffer disadvantage.
- A dark area completely blocks all sensory input, even within immediate range.
> For example, a dense fog cloud is considered dark ([[Sight|sight]]), heavily obscured ([[Sound|sound]], [[Blood|blood]]), lightly obscured ([[Heat|heat]], [[Electromagnetism|electromagnetism]]), and bright for all other senses.

