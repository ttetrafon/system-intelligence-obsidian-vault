---
tags:
  - rules/characters
---
Creatures and vehicles can usually move around on their own.

Their movement is described through a combination of movement type, speed, manoeuvrability, and the material (**gas**, **liquid**, **solid**) they can use the specific combination to move on or through.

- {!important} The difference between the sum of your speed and manoeuvrability and that of your adversary's is applied as a [[Speed|speed bonus/penalty]] to your checks.

## Movement Types

Movement types are always related to specific organs, appendages, and/or equipment. Losing a movement organ/appendage usually results in hindering or even losing the movement type.

```dataview
LIST
FROM #rules/characters/movement AND -"_templates"
SORT file.name ASC
```

## Movement Speed

Each movement type can be used on specific materials only - solids, liquids, and/or gases, except for zero-gravity which operates only in the void of space, when no gravity is present.

```dataview
LIST
FROM #rules/gameplay/speed AND -"_templates"
SORT index ASC
```

## Manoeuvrability

```dataview
LIST
FROM #rules/gameplay/manoeuvrability AND -"_templates"
SORT index ASC
```
