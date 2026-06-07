---
tags:
  - rules/characters
---
As a creature, you have senses - means to perceive your environment. You can use these senses to perceive your environment.

```dataview
LIST
FROM #rules/characters/sense AND -"_templates"
SORT file.name ASC
```

### Sensory Organs

Each of the senses is related to an organ, item, implant, or something similar. If the relevant organ/item is lost, destroyed, or blocked, then the sense stops working.

### Range

Senses have a [[Exploration#Distances|range]] (default given in each one, may be modified by your species). Non-immediate ranges are not absolute, senses operate farther but you suffer a -3 cumulative penalty for each range category beyond the sense's range.

### Passive/Active Senses

A passive sense requires the stimulant to be emitted for the sensory organ to catch and decode.

On the contrary, creatures and equipment with active senses have an organ that emits the stimulant themselves, and then when the signal comes back they use that to perceive their environment.

### Sensitive Senses

A sensitive sensory organ cuts any [[Exploration#Visibility|visibility]] penalty to 1/4 (rounded down), which can even eliminate it and makes the sense precise.

### Piercing Senses

A piercing sensory organ ignores the usual materials blocking the sense.

### Truesight

In addition to your normal senses, you may enjoy truesight, which augments all the other modes of vision you already have. Truesight defeats all magical/technological manipulation of your senses or magical ways to hide and/or change the natural shape of an item/environment/creature.

# Senses Perks

```dataview
LIST
FROM #rules/characters/perk AND #rules/characters/vision AND -"_templates"
SORT file.name ASC
```



