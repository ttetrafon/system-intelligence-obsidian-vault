---
tags:
  - rules/adventuring/domain
---
# Distances
```dataview
TABLE WITHOUT ID link(file.name) as "Distance", travel-time as "Magic/Tech Travel Time", description as Description
FROM #rules/gameplay/distance and -"_templates"
SORT index ASC 
```

# Movement
There are multiple ways you can move. The movement modes that you may possess are the following.
Each movement mode usually has its own speed rating derived from your species or the way you got the specific movement type and is independent of the others.
```dataview
LIST
FROM #rules/characters/movement AND -"_templates"
SORT file.name ASC
```

- [I] Each movement type acts as a [[../../Gameplay/Resources|resource]] that affects relevant checks.

## Speed
Each of your movement types features its own speed.
Sometimes, the difference in speed between you and your opponents will result in a [[../../Gameplay/Bonuses & Penalties/Speed|speed]] [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|bonus/penalty]] on your actions.
```dataview
LIST
FROM #rules/gameplay/speed AND -"_templates"
SORT index ASC
```

## Manoeuvrability
You manoeuvrability determines your ability to perform while moving, your ability to turn while moving at full speed, and generally your movement capabilities, including your acceleration.
```dataview
LIST
FROM #rules/gameplay/manoeuvrability AND -"_templates"
SORT index ASC
```

# Exploration [[../../Characters/Aspects/Aspects|Aspects]]
```dataview
LIST
FROM #rules/characters/aspect/exploration AND -"_templates"
SORT file.name ASC
```

# Difficult Terrain
Some terrains and effects may slow you down.
Difficult terrain usually impedes specific movement types. This is denoted besides the difficult terrain.
Each terrain makes it more difficult to move, reducing your [[#Speed|speed]] and [[#Manoeuvrability|manoeuvrability]] by the indicated amount.
- **Slick Ice**: [[_movement types/Walk|Walk]] -1
- **Strong Winds**: [[_movement types/Fly|Fly]] -2, [[_movement types/Walk|Walk]] -1

## Non-Optimal Circumstances
When you are moving in non-optimal situations, you treat the terrain as difficult.
> For example, walking on a tightrope imposes [[_movement types/Walk|Walk]] -1 or on a steep slope [[_movement types/Walk|Walk]] -2.

Such movement almost always requires appropriate [[../../Characters/Aspects/Traversal|Traversal]] checks to be performed.
Failing such a check means that you either do not progress at all and your movement ends there, or that a misfortune befalls you.
> For example, as human, you are not equipped to walk properly on smooth ice. Such attempts require a 