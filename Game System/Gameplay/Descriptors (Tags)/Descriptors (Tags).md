---
tags:
  - rules/gameplay
---
All effects have one or more descriptors that define some common characteristics between different effects.
Descriptors come in the following categories:

### Ability Types
All abilities are defined mainly with their type.
```dataview
LIST
FROM #rules/gameplay/descriptor/ability-type AND -"_templates"
SORT file.name ASC
```

### Effect Types
All effects fall under three categories.
```dataview
LIST
FROM #rules/gameplay/descriptor/effect-type AND -"_templates"
SORT file.name ASC
```

### Descriptive Tags
Tags are used to categorise everything in the game by providing a common background for actions, effects, etc.
```dataview
LIST
FROM #rules/gameplay/descriptor/designator AND -"_templates"
SORT file.name ASC
```

### Damage Categories
All ❗damage falls under one of the following categories.
```dataview
LIST
FROM #rules/gameplay/descriptor/damage-category AND -"_templates"
SORT file.name ASC
```

### Creatures
All creatures are assigned a variety of descriptors which define their common characteristics. The descriptors are split into **creature types**, **creature subtypes**, and **creature dietary habits**. Usually a creature possesses only a single type and may have zero or multiple subtypes, and at least one dietary habit.

#### Creature Types
```dataview
LIST
FROM #rules/gameplay/descriptor/creature/type AND -"_templates"
SORT file.name ASC
```

#### Creature Subtypes
```dataview
LIST
FROM #rules/gameplay/descriptor/creature/subtype AND -"_templates"
SORT file.name ASC
```

#### Creature Characterisations
```dataview
LIST
FROM #rules/gameplay/descriptor/creature/characterisation AND -"_templates"
SORT file.name ASC
```

#### Creature Dietary Habits
```dataview
LIST
FROM #rules/gameplay/descriptor/creature/dietary-habit AND -"_templates"
SORT file.name ASC
```
