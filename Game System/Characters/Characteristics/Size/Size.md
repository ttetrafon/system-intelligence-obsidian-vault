---
tags:
  - rules/characters/characteristic
---
Your size determines how much space you physical form occupies and your carry capacity, which measures how much stuff you can accommodate on you.
In the battlefield especially, size becomes extremely important since it defines how far you can reach, how easily it is to be attacked and to attack others, and what limitations are imposed on your movement.

In practice, your size falls within one of the following categories.
```dataview
TABLE WITHOUT ID link(file.name) as "Size", value as "Value", dimensions as "Dismensions", weight as "Weight", bulk as "Bulk", example as "Examples"
FROM #rules/characters/size AND -"_templates"
SORT value ASC
```

## Size Difference & Checks
Under many circumstances, like combat, the comparison between your size and your target's provides/imposes a  [[../../../Gameplay/Bonuses & Penalties/Size|size bonus/penalty]] to your checks, equal to the difference in size between you and the target.

In some specific situation, like when dealing ❗damage, the size difference is simply applied as a modifier to the action.

> For example, when a behemoth (colossal: 10) tries to cause a specific injury to a human (medium: 5), it will suffer disadvantage 5 on its attack. Similarly, a human striking the behemoth with a hand-held weapon will enjoys advantage 5 on their attack. At the same time, in the first occasion the behemoth deals +5 damage if it hits, while the human attacking the behemoth deals -5 damage.

> A human (medium: 5) is trying to break down a door (medium: 5), so no bonus or penalty applies. The same human attempting to break down a wall (large: 6) suffers disadvantage 1 on their check. Later, the human tries to break a small metal straw (tiny 3), and suffers disadvantage 2 as they are not using any tools and applying one's might while handling something that small is difficult. An ogre (large: 6) trying to break down the same door gains advantage 1, and suffers disadvantage 3 when trying to break the same straw.

## [[../../../Gameplay/Resources|Resources']] Size
…
> An arrow is a tiny item. If you have arrows 1d4, you are carrying a tiny item. If you craft more arrows to increase their stockpile to 1d8, the total of your arrows will be considered to be a small item against your encumbrance.
