---
tags:
  - rules/gameplay
---
Bonuses and penalties are applied directly, with bonuses added while penalties subtracted, to the [[Gameplay#Effective Score|effective score]] used to determine success of a check.

## Bonus/Penalty Types

Each bonus or penalty has a specific type.

Bonuses or penalties of the same type do not stack, only the highest applies, but different types are rolled separately.

> For example, a magical cloak you wear provides you a +2 enhancement bonus on your thievery checks. A companion of yours casts a spell that makes hiding more effective, providing an enhancement bonus of +3. When trying to infiltrate the camp of your enemies you only benefit from the +3 bonus.

If you have a bonus or penalty of the same type simultaneously, you use their difference to find out if you gain a bonus or suffer a penalty on your actions.

> You are still wearing your magical cloak that provides a +2 enhancement bonus on your thievery checks, but you are trying to hide from your pursuers in the town square under an effect that outlines you with magical light which imposes a -4 penalty on your thievery checks. This means that you suffer a -2 enhancement penalty on your final roll.

### Bonus/Penalty Tags
```dataview
LIST
FROM (#rules/gameplay/bonus OR #rules/gameplay/penalty) AND -#idea AND -"_templates"
SORT file.name ASC
```
