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
...

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
