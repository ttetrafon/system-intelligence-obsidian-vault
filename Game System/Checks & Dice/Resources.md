---
tags:
  - rules
---
Resources in the game are abstracted and not count precisely.
> For example, you have a wealth score instead of counting exactly how much money you have.

These scores are counted using dice, in the following order:
- d4
- d6
- d8
- d10
- d12
- d20
- d20+d4
- d20+d6
- d20+d8
- d20+d12
- d20+d20
- 2d20+d4
- …


# Resource Checks

Sometimes you may need to make a resource check (like ❗morality❗, ❗crafting❗, and ❗haggling❗ checks). The result of a resource check modifies the accompanying attribute check.

You make a check with your resource die, and you gain a +1 bonus on your degree of success for each full 5 points of your result; this means if you have a d4 resource, you cannot gain a bonus.
> For example, you are sneaking around (DEX 75) and you have a deceitful moral of d12. You got a regular success on your sneak check, but then you rolled an 11 on your deceitful check, which gives you a +2 on your degree of success, making your result a hard success.

Note that in some situations, the result of this check will be a penalty instead.
> Having successfully sneaked into the palace, you find yourself behind a guard that you cannot pass around without them noticing you. You decide to assassinate them on the spot, and your check to cut their throat gives you a regular success. Your violent/peaceful morals though are d6/d12 - you make a violent check for  and a peaceful for 9, which is a penalty of -1 on your degree of success, turning your regular success turns into a failure.


# Expenditure
When you spend some resource you make one expenditure check (or more). You roll your resource die, and if you roll the minimum, you reduce the resource by 1 step. If you roll an 1 on a d4, your resource is fully expended.

Quite often, this check may have a target number. In that case, you lower your resource if you roll at that target or lower.
> When eating during camp, each additional individual in the party after the first makes increases the check against your provisions or supplies by +1, so a party of 4 with supplies equal to d8 will have their supplies drop to d6 if they roll 1-4 on their d8 resource die. Similarly, when buying something, you the target number is defined by the item's price.

In such cases, you generally cannot attempt to make a resource check at all if your resource's die maximum is lower than the target number.
> A party of 6 people, with d4 supplies, can't feed them all; 2 need to be left out for the other 4 to satiate their hunger and thirst properly.

On the other hand, if your minimum resource die is higher than the expenditure target, you don't make a check and your resource remains unaffected.
> For example a d20+d4 has a min of 2, which means that you do not make normal expenditure checks any more for this resource.


# Accumulation
An accumulation check is again a roll of the resource die. If you roll the minimum, your resource die increases by 1 step.

As above, in some situations, there may be a target number. This is again the maximum of the roll's result required to get to increase your resource score.
> Your attempt at foraging for food and water while traveling resulted in a degree of success 3. This means you make a supplies (initial score d6) check to increase them with a target of 3, which means that if you roll 1-3, your supplies increase to d8.


# Split a Resource
You can split a resource die to two stockpiles easily. First, decide how much you want to extract (the target die). Then, make an expenditure check with a target equal to the target die's maximum.
> You are going to get some money out of your treasury (d12) to carry with you while adventuring. You decide to take a d6 worth of coins. You make a d20 check against 6, and roll 5, which means you now have a d6 of wealth on you and your treasury has d10.


# Merge Resources
You can merge resource stockpiles together. You make a roll with the lower of the stockpiles first, and use that result as the target for the higher stockpile's accumulation check. The lower resource is then considered spent, regardless of the result of your accumulation check.
> You found some potions (d4) in an abandoned alchemist's laboratory. You already carry some potions with you though (d6). You roll on the d4 a 2. You then make an accumulation check on your d6 and get a 5, which means you do not increase your potions stockpile.

