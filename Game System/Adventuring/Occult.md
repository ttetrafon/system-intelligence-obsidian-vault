---
tags:
  - rules/adventuring/realm
---
# Magic Level (ML)
All magical effects and items are described by their ML. This is a number (I - XX, or even more) that describes how complex the effect is, and how knowledgeable you have to be to effectively interact with it.

The ML of your spells and magical items is determined by the seeds and parameters used to create them.

A civilisation's ML also determines its overall advancement ([[Kardashev scale]]), as an alternative to its [[Technology#Technology Level (TL)|TL]].

## Spell Resistance (SR)

An intrinsic defence against [[Su|Su]] effects, spell resistance can completely block incoming effects, both beneficiary and not.

Your SR has a [[Resources|resource score]], although SR usually is at 10+.

When you are targeted by any magical effect that allows for SR you make a [[Chances Roll|chances roll]]. On a success, you completely ignore the effect.

# Spellcasting

### Paradigm

The ability to cast spells comes in various ways. Regardless of the paradigm you follow, knowledge of seeds is universal and not directly related to the paradigm. But at the same time, the [[focus]] you use determines which seeds you have access to.

```dataview
LIST
FROM #rules/adventuring/occult/spellcasting-paradigm AND -"_templates"
SORT file.name ASC
```

… Runes
```dataview
LIST
FROM #rules/adventuring/occult/seed-rune AND -"_templates"
SORT file.name ASC
```
```dataview
LIST
FROM #rules/adventuring/occult/power-rune AND -"_templates"
SORT file.name ASC
```

# Occult Skills

## Eerie

If you are trained in the occult, you can detect the uncanny, the unnatural, and the unwholesome. You may notice that you have entered a haunted house, or that someone is using magic to observe you, or even that the one you are speaking to is cursed or mind controlled. This operates as a sixth sense, and but you generally need to concentrate to it.

# Occult [[../Characters/Aspects.md|Aspects]]

```dataview
LIST
FROM #rules/characters/aspect/occult AND -"_templates"
SORT file.name ASC
```

# Occult [[Game System/Characters/Perks|Perks]] & [[Traits]]

```dataview
LIST
FROM (#rules/characters/perk/occult OR #rules/characters/trait/occult) AND -"_templates" AND -#idea
SORT file.name ASC
``` 
