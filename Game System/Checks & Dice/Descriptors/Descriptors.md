---
tags:
  - rules
---
All effects have one or more descriptors that define some common characteristics between different effects.

Descriptors come in the following categories:

### Ability Types

^8add01

All abilities are defined mainly with their type.
```dataview
LIST
FROM #descriptor/ability-type AND -"_templates"
SORT file.name ASC
```

### Effect Types
All effects fall under three categories.
```dataview
LIST
FROM #descriptor/effect-type AND -"_templates"
SORT file.name ASC
```

### Descriptive Tags
Tags are used to categorise everything in the game by providing a common background for actions, effects, etc.
```dataview
LIST
FROM #descriptor/designator AND -"_templates"
SORT file.name ASC
```

### Damage Categories
All ❗damage falls under one of the following categories.
```dataview
LIST
FROM #descriptor/damage-category AND -"_templates"
SORT file.name ASC
```

### Creatures
All creatures are assigned a variety of descriptors which define their common characteristics. The descriptors are split into **creature types**, **creature subtypes**, and **creature dietary habits**. Usually a creature possesses only a single type and may have zero or multiple subtypes, and at least one dietary habit.

#### Types
```dataview
LIST
FROM #descriptor/creature/type AND -"_templates"
SORT file.name ASC
```

#### Subtypes
```dataview
LIST
FROM #descriptor/creature/subtype AND -"_templates"
SORT file.name ASC
```

#### Characterisations
```dataview
LIST
FROM #descriptor/creature/characterisation AND -"_templates"
SORT file.name ASC
```

#### Dietary Habits
```dataview
LIST
FROM #descriptor/creature/dietary-habit AND -"_templates"
SORT file.name ASC
```
