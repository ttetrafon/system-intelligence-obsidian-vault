---
tags:
  - rules/adventuring/realm
---
While adventuring, you will find yourself facing adversity that oftentimes escalates into combat, either in the form of a skirmish between small groups of people or war between nations or organisations.


# Attack & Damage

...

## Damage Immunity, Resistance, & Vulnerability

If you are immune to a [[Descriptors (Tags)#Descriptive Tags|descriptor]] or [[Descriptors (Tags)#Damage Categories|damage type]] you never suffer any damage or [[Health#Conditions|condition]] from effects with that tag.

- {!important} If an effect features multiple tags, it is still negated as long as it features the one you are immune to.

Resistance, similarly, reduces incoming relevant damage by a specific number, at a given ratio. Resistance is given as type #1, where the type determines what damage is reduces and # how many points of damage are absorbed.

Vulnerability on the other side, increase relevant incoming damage by a specific number, up to a maximum of double the triggering damage.

> If you have vulnerability 3, when suffering 1 point of fire damage, you will instead suffer 2. If you suffer 5 points of fire damage, you will suffer 8 damage instead.

# Combat [[../Characters/Aspects.md|Aspects]]

```dataview
LIST
FROM #rules/characters/aspect/combat AND -"_templates"
SORT file.name ASC
```

# Combat [[Game System/Characters/Perks|Perks]] & [[Traits]]

```dataview
LIST
FROM (#rules/characters/perk/combat OR #rules/characters/trait/combat) AND -"_templates" AND -#idea
SORT file.name ASC
``` 
