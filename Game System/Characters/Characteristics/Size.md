---
tags:
  - rules/characters/characteristic
---
Your size determines how much space you physical form occupies and your carry capacity, which measures how much stuff you can accommodate on you.

In the battlefield especially, size becomes important since it defines how far you can reach, how easily it is to be attacked and to attack others, and what limitations are imposed on your movement.

In practice, your size falls within one of the following categories.

```dataview
TABLE WITHOUT ID link(file.name) as "Size", value as "Value", dimensions as "Dismensions", weight as "Weight", bulk as "Bulk", example as "Examples"
FROM #rules/characters/size AND -"_templates"
SORT value ASC
```

## Size Difference & Checks

Under many circumstances, like combat, the comparison between your size and your target's provides/imposes a [[Game System/Gameplay/Descriptors (Tags)/bonuses & penalties/Size|Size]] [[Gameplay#Bonuses & Penalties|bonus/penalty]] to your checks, equal to the difference the two sizes.

> For example, when a behemoth (colossal: 10) tries to cause a specific injury to a human (medium: 5), it will suffer a -5 penalty on its attack. Similarly, a human striking the behemoth with a hand-held weapon will enjoys a +5 bonus on their attack. At the same time, in the first occasion the behemoth deals an +5 effect if it hits, while the human attacking the behemoth deals -5 effects.

> A human (medium: 5) is trying to break down a door (medium: 5), so no bonus or penalty applies. The same human attempting to break down a wall (large: 6) suffers a -1 penalty on their check. Later, the human tries to break a small metal straw (tiny 3), and suffers a -2 as they are not using any tools and applying one's might while handling something that small is difficult. An ogre (large: 6) trying to break down the same door gains a +1 bonus, and suffers a -3 penalty when trying to break the same straw.

## Bulk

Bulk determines how much of your carrying capacity an item will take up.

## Resource Stacks

A [[Resources|resource stack's size]] has its size determined by its base item size increased by its current score.

> An arrow is a tiny item. If you have arrows 17, you are considered to be carrying a small item. If you craft more arrows to increase their stockpile to 22, the total of your arrows will be considered to be a medium item instead.
