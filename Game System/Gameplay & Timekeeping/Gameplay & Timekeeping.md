---
tags:
  - rules
---
# Time Keeping
Time keeping sets the pace of the game. The game is split into two distinctive parts, ***adventuring*** and ***downtime***.

### Quarter Day
Usually, there is no need to keep precise timing of everything that happens during a game.
Apart from the normal calendar used in the area of adventuring (days, weeks, months, years), a useful abstraction is to split the day in four parts, each one called a quarter day.
- morning
- afternoon
- evening
- night

With this in mind you can easily calculate how fast the time passes when the adventurers do their stuff.

### Cycle
The most important time measure is the cycle. A cycle denotes a time period of about one week on Earth. Large scale events and actions, like crafting and organisation evolution, always happen between cycles.


# Timers (Clocks)
A simple way to create tension is to use timers. These are abstract countdowns that run out on actions, not on time itself.

To create a timer, first establish what it does and give it a name.
> The players are sneaking in a castle, trying to reach the king's chambers undetected. The timer will be named "Guards Alerted", and when the players have finally caused enough commotion to draw the guards to them.

Second, decide how easy or difficult is this to happen, and assign to it a die, from d4 to d12. The size of the counter can also be taken from check results, with the degree of success determining it as follows: 
1. d4
2. d6
3. d8
4. d10
5. d12
6. d20
> Since it is a normal day and there are people walking throughout the castle, the players are inconspicuous enough, and there is a huge feast tonight for the town people on the Castle's yard, the castle people won't easily notice the players are out of place. The players then make a group check for sneak, and end up with degree of success 4, meaning their sneak clock will be a d10.> 

From there on, the players will move from encounter to encounter. Resolving each encounter will probably move the timer ahead, one or more steps depending on the situation and resolution
> The players don't know their way around, so they decide to randomly wander in the corridors until they find their way. They suddenly find their way in a storage room where some workers are packing crates with supplies. A guard in the room immediately apprehends them, but they manage to quick talk their way out of the situation. Still, the guard will remember them and will mention the happening to others in passing, reducing the timer to 9.
> Later, the players are sneaking in the private area of the castle, where a servant hears them skulking and immediately runs off. They don't manage to stop him in time, reducing the timer by a whole 4 points more, from 9 to 5.

This continues either until the timer finishes, at which point what it described happens, changing the situation drastically, or the timer becomes irrelevant.

- [I] For the GM, use the [[../../___Obsidian/Plugins#^52e1be|clocks sidebar]] to keep track of game events - they are persistent. 


# Adventuring
The adventuring phase is structured and is when most of player activities happen. The adventuring phases are the following:

### Campaign
A campaign consists of many quests tied together, affecting the same characters under a single plot.
> For example, you have named the campaign you are currently playing Upper Echelon and is the quest of a group of unlikely heroes trying to assume political power for the better or for worse.

### Quest
A quest is a series of scenes, all connected for some reason.
> During this campaign, a quest the players are currently undertaking is to infiltrate the stronghold of a corrupt politician without being noticed, with the purpose of learning his secrets and exposing those secrets to lower the target's political power throughout the nation.

### Scene
A scene is a series of encounters that are all strongly tied together.
> While in the above mission, a scene can be considered the passage through the sewers from the drain the players found outside of the stronghold and up to their entrance through the toilets.

### Encounter
An encounter is a single event or interaction between groups of characters, creatures, and/or the environment.
> While in the tunnels under the stronghold, the players were ambushed by mutant rats which they failed to spot in time. This is an encounter.

#### Encounter Level (EL)
An encounter level (EL) is equal to the opponents' [[../Characters/Tiers/Experience Tier (ET)|tiers]] total sum. To succeed on an encounter, you take turns until you beat the encounter's EL, fail, or withdraw. Your party level (PL) is equal to your group's tier total.

### Turn
A turn is a single phase within an encounter. During a turn, decisions are made and actions are attempted. The logic of the turn is to split actions into meaningful groups and not micromanage the passage of time, as it should be at least somewhat abstract like all other resolution mechanics in the game.
All participants describe what they will attempt, in order from lower to higher [[../Characters/Tiers/Experience Tier (ET)|tier]], and make a number of checks equal to their tier. If tiers are tied, the opponents should first describe what they are doing and the players can go after. Elite opponents instead roll initiate against the players to decide who goes first, but consider the PCs always in a better position to the common enemies.

![[../Characters/Aspects, Skills, & Perks/skills/Initiative|Initiative]]

The players, plus any elite and/or mythic opponents, then make their checks - the [[../Checks & Dice/Checks & Dice#Success & Failure|difficulty]] of your checks is decided by the situation and your opponents' attributes & skills - and depending on the results the GM describes how the turn has been resolved.

Consider the common opponents to score a total degree of success equal to their [[#Encounter Level (EL)|EL]] each turn, modified by the degree of success of elite opponents, unless they can't deal damage for some reason.

After the turn is resolved, you decide what to do with the degrees of success you have collected, depending on what actually happened during the round.
You have the following options between which you split your total degree of success:
- Reduce your opponents' EL by an equal amount. This reduction may result in specific opponents getting out of commission, depending on the situation. This applies to the next turn though.
- Reduce your opponents' successes by an equal amount. This is applied immediately, before incoming effects are decided.
The DM similarly decides what your opponents' total causes (you may decide about this yourself by using the tactics skill though).
- Cause injuries and effects to the players/environment.

Individual successful offensive checks can be used to impose specific injuries and/or effects on their targets in addition to the effects of their degree of success above. You can split the degree of success of such checks between targets so to affect them differently.
> For example, during your round you may attempt a swordmanship check and get 3 degree of successes. You decide to use these to cause an arm injury (level 2) on one opponent and cause another one to become out of balance (level 1).

You can also combine degrees of success between allies to improve the effects imposed. Start by the greater degree of success, and then add half the other degrees of success (min +1). When contributing in such a combination you cannot split your degree of success as above.
> You are fighting with a really tough opponent, so you want to focus your attacks to cripple it. All your team attacks the creature and get 4, 1, 2, and 3 degrees of success respectively. So, in total you end up with 4 + 1 + 1 + 1 = 7 degrees of success to impose crippled on the target creature.

Individual successful defensive checks reduce the total incoming damage, regardless of the turn's resolution. In addition, individuals reduce personal damage based on their ❗resistances/immunities❗.

Furthermore, specific skills may affect specific situations differently.

Damage dealt to the player group is decided by the players and their checks, so it can be either distributed or pointed to specific players. Damage to the opponents is decided by themselves, unless the players succeeded on a tactics check where they can have some agency.

> The players (tier II) have stumbled upon a raider (4 raiders * tier I = EL 4) checkpoint on a rarely travelled bridge. The encounter begins with the raiders demanding a toll.
> 1. Two of the players (a, b) try to negotiate with the raider in charge to allow them to pass through the bridge, while the third player (c) attempts to hide and prepare for battle.
> 	1. bluff (1), act (-1)
> 	2. fast talk (2), intimidate (1)
> 	3. stealth (-2), athletics (1)
> First round's total degree of success is 2, which means the players suffer 4 (from EL) + 2 (from failure) mind/spirit damage and fail the negotiations. Because of the third player trying to initiate a sneak attack, the raiders are provoked to attack the players.
> 2. The two players on the bridge (a, b) try to keep a shield wall in place and retreat carefully to avoid the raiders' crossfire, while the third player (c) attempts to circle back and throw some sneak attacks on exposed raiders.
> 	1. tactics: hero (2), parry (1)
> 	2. parry (3), dodge (1)
> 	3. stealth (1), bows (1)
> Second round's degree of success is 9, 5 points higher than the target of 4. The players deal damage to the raiders equal to 5, plus 1 from the bows check. They split this damage to the raiders in 2-2-1-1, which is enough to drop all of them. At the same time, players suffered 4 damage (from EL), which they ignore because of successful defensive checks.

#### Surprise
Sometimes an encounter can begin with some participants not aware of this happening. In this cases, the unawares cannot take any actions during the first turn of the encounter, and their defensive skills suffer disadvantage or cannot be used.

#### Effects & Turns
Non-instantaneous effects that last for multiple turns, encounters, scenes, or even adventures and whose target can shake them off are resolved at the end of each turn.
> Binding magic have been used against you during this turn denying you of any type of movement. At the end of your turn you can attempt a resolve check to shake the effect off.

### Flashback
While adventuring, you need to prepare for your adventures as a player and character both.
Due to the nature of TTRPGs you can never have enough information, and most of the time it's impossible to prepare as the character you are playing would do in a given situation.
To cover for such problems, flashbacks can be introduced at any time during adventuring that a character would make sense to have been prepared for a specific eventuality.
> You are trying to infiltrate a secure compound and during your adventure you are stopped by a guard. At that time you decide that having prepared for the infiltration you may have found about the guards working on security. You recall a flashback, in which you look for information about this specific guard. During the flashback you manage to find some evidence of wrongdoing, resulting in something to use against the guard.


# Downtime
Downtime happens in-between adventuring phases. It is time for free play without much need of checks, and it when players can undertake downtime activities.

Possible activities are ❗crafting, ❗training, ❗researching, ❗working, ❗recuperating, ❗foraging, ❗scraping, and so on.

Downtime is split in [[#Cycle|cycles]] which are an abstract way to measure the passage of time.

You are allowed to take a number of downtime activities within each cycle equal to your [[../Characters/Tiers/Experience Tier (ET)|experience tier]] (minimum 1). You can take an extra one, but you may suffer from ❗exhaustion at the beginning of the next [[#Cycle|cycle]]. If you are already ❗exhausted at the beginning of a downtime cycle, your exhaustion may increase at its end if you perform any downtime activities besides taking only light activities or resting.

Sometimes downtime periods are intertwined with adventuring, allowing you to progress on your downtime activities while actively adventuring. It's usually better to decide what the players did during their downtime at the end of each cycle, resolving whatever needed as a [[#Flashback|flashback]].

The number of downtime periods available to you is decided by the GM and may or may not be revealed at the start of downtime.


# Tasks (Long-Term Activities)
A task is a complex endeavour that takes time and requires multiple checks.

Each task is described by its ***complexity***, a positive number usually between 1 and 100 - can be higher in some occasions.

***Progress*** on a task starts at 0. At the end of each time ***interval*** (usually a [[#Downtime|downtime activity]], unless otherwise noted), you add your [[../Characters/Tiers/Experience Tier (ET)|tier]], and when applicable, the rank of the most relevant [[../Characters/Aspects, Skills, & Perks/Aspects, Skills, & Perks#Skills|skill]]/[[../Characters/Aspects, Skills, & Perks/Aspects, Skills, & Perks#Perks|perk]]. You then make a d% check. If the result is higher than the current progress, you add the unit's die to the task's progress also. A die of 0 means you add/subtract 10 points of progress.

The task is finished when the progress reaches or surpassesits complexity.
