---
tags:
  - rules/gameplay
---
# Checks

During gameplay you roll 2d12 against a target determined by the situation. Actions and tasks are performed by rolling a check and comparing the result your current score - rolling under the score is a success.

> You are trying to move stealthily to enter the courtyard of a facility without the guards spotting you. Your effective score is 17, so you need to roll 17 or under to succeed.

# Effective Score

Most action/task targets are composed of an [[Adventuring.md#Adventuring Domains|adventuring realm]], an [[Aspects|aspect]], and a [[Morality|morality score]].

> In the example above, you are using *skullduggery* 7 (adventuring realm), thievery 8 (aspect), and control 2 (moral), for a total of 17.

# Difficulty

You roll 2d12 and compare the result with the action's difficulty, which is derived (round down) from the score relevant to the action ([[Adventuring.md#Adventuring Realms|adventuring realm]] + [[Aspects|aspect]] + [[Bonuses & Penalties|bonuses](Bonuses%20&%20Penalties.md) - [[Bonuses & Penalties|penalties](Bonuses%20&%20Penalties.md)).

| *difficulty* | *target (score \* …)* | *regular effect* | *hard effect* | *extreme effect* |
| ------------ | --------------------- | ---------------- | ------------- | ---------------- |
| failure      | > score               | -1               | -2            | -4               |
| regular      | <= score x1           | 1                | -1            | -2               |
| hard         | <= score x1/2         | 2                | 1             | -1               |
| extreme      | <= score x1/4         | 4                | 2             | 1                |
| impossible   | extreme critical      | -                | -             | -                |

## Critical & Fumble

When you roll doubles you get a critical or a fumble, depending on if the roll is a success or a failure.

A double roll of 12s is a usually fumble, unless your effective score is 24 or more, in which case double 12s is just a failure.

# Effect

The lower you roll, the better in general, meaning you have succeeded with greater effect. Your check's effect is shown on the table above, and depends on the action's difficulty.

The effect as a number affects the results of your action as well as their magnitude.

> On your stealth check above, if you roll 18-20 you will fail, 9-17 you succeed with effect 1, 5-8 you succeed with effect 2, and 2-4 you succeed with effect 4.

A critical success adds 4 to your effect.

A fumble similarly subtracts 4 from your effect.

## Extra Success Effects

Your final effect determines how well you succeeded, and translates either in a better outcome or a number of positive outcomes equal to the check's effect.

## Limited Success

When you fail, unless (i.e.: negative effect), you may instead decree that you succeeded, albeit at some cost.

You must decide that you suffered a number of drawbacks equal to the check's negative effect.

❗The GM must always approve this.

> Failing on your stealth check above means you got spotted. You decide that you would prefer to avoid being seen, and propose that you had to leave your shotgun behind as a drawback, converting your failure to success.

# Retry

You can retry failed actions as long as you:

- have enough time,
- can specify how/if you changed your approach to the action at hand,
- and have enough resources/consumables if needed.

Generally, the difficulty of an action remains the same unless it makes sense to increase, as determined by the GM.

> Failing your stealth check from the previous examples is something you cannot retry, unless you leave the area and come back later - although it will be more difficult as the guards will be aware of your infiltration attempt.

> After you managed to infiltrate the facility, you find a locked door. Your first attempt to open it fails, but barely so nothing has gone (more) wrong. You can retry this immediately, and as many times as you want, as long as no guard comes to check while you are working on the lock and no alarm has been triggered.


# Advantage & Disadvantage \#

You may gain advantage or disadvantage in cases where bonuses/penalties are needed but they aren’t specified.

Advantage/disadvantage may be applied multiple times (#) in some cases. In such cases you roll # extra d12 dice and keep the two best/worst dice respectively.

When penalised with disadvantage, you cannot get the effect of [[#Critical & Fumble|critical success]].

Similarly, when benefited from advantage you cannot suffer a [[#Critical & Fumble|fumble]].

If you simultaneously enjoy advantage and suffer disadvantage, you subtract the lower value from the higher, and that is the # of advantage/disadvantage you use for your check.

# Types of Checks

## Opposed Checks

When you are making checks against some other creature, you both make a check and the greater effect wins.

Alternatively, especially when pitted against generic creatures or minions, only you make a check, with the [[../..//Game%20System/Gameplay.md#Difficulty|difficulty]] determined by the target's [[Experience Tier (ET)|ET](Characters/Tiers/Experience%20Tier%20(ET).md), and in special occasions, [[Perks|perks]].

- [[Experience Tier (ET)|ET](Characters/Tiers/Experience%20Tier%20(ET).md) lower or equal: regular
- higher [[Experience Tier (ET)|ET](Characters/Tiers/Experience%20Tier%20(ET).md): hard

## Group Checks

Sometimes your whole group will need to make a check. In this case, you all make a check individually.

The result of the group action, is the median of all your results.

## Cooperative Checks (Help)

When helping others, you can either:

- replace one of the initiator's scores, if your own is better
- provide a bonus from some aspect or perk the initiator does not possess
- provide advantage 1 to the initiator

Note that possible [[Bonuses & Penalties|penalties](Bonuses%20&%20Penalties.md) are derived from all those cooperating, although penalties of the same type do not stack - only the highest applies.

## Team Checks

You and your allies can perform the same action together for greater effect. You all must synchronise and be able to take the action simultaneously for this to work. If done, a combined check uses the total of your checks' results as its effect.

## Careful Action (Taking Time)

You automatically succeed on a check if you have enough time to do it and your active score is enough to succeed at the required difficulty.

## Combined Checks (Multi-Tasking)

Sometimes you need to take multiple actions simultaneously. If the actions are not normally compatible or related, you make a single check against each of the appropriate scores but suffer cumulative disadvantage on it for each action after the first (2 actions impose disadvantage 1, 3 actions impose disadvantage 2, etc).

> You are driving, shooting, and talking on the phone at the same time, you suffer disadvantage 2 on all your check while performing all three actions.

If you have a [[Mythic Tier (MT)|MT](Characters/Tiers/Mythic%20Tier%20(MT).md), you can instead take up to MT actions simultaneously without a penalty.