---
tags:
  - rules/adventuring/domain
---
A social encounter happens when you are interacting or conversing with other intelligent beings.

There are many ways you can interact with others, depending on the situation, the environment, and your objectives.
These can be at any scale, from talking to a merchant bartering their prices, to talking to a king as a diplomat.

# Disposition
❗NPC and ❗organisation attitude falls in the following categories. 
- **Hateful** (-d20): Will attack you on sight, disregarding personal safety to do so.
- **Hostile** (-d12): Will attack you if possible, but won't endanger themselves to do so.
- **Unfriendly** (-d6): Wishes you ill, mislead you if possible, avoid you, watch you suspiciously, or insult you at every opportunity.
- **Indifferent** (0): Doesn't much care about you.
- **Friendly** (d6): Wishes you well, will help you if possible but won't take responsibility, will always provide helpful information, and even support you without taking chances.
- **Helpful** (d12): Will take risks to help you, protect you, heal you, advise you, and even fight alongside you.
- **Fanatic** (d20): Will die to support you.

Disposition is a [[../../Gameplay/Resources|resource]] that changes due to interactions with you, during social encounters or through your fame, or infamy.

### First Impression
Usually, NPCs start at indifferent, unless there is a reason for them not to.
When you first meet with someone, make a *first impressions* [[../../Gameplay/Resources#Resource Modification as Check Result|check]] (relevant [[#Social ../../Characters/Aspects/Aspects Aspects|social aspect]] + [[../../Characters/Attributes/Presence (PRE)|PRE]]) to modify their initial attitude towards the direction you want.

# Social Encounters
A social encounter can either be a simple happening or a more involved process.

Simple ones are easily resolved with a few or no checks required, and within a limited time frame.
> These include asking a local for directions, bartering on the market, and so on.

Complex ones are resolved as ❗encounters/tasks, with any damage sustained being temporary (usually).
Actions taken in a social encounter are called social manoeuvres.

## Social Manoeuvres/Skills
A social manoeuvre is anything you do to change the disposition of others, regardless of scale.
The type of manoeuvre can lead to either a permanent or temporary change of [[../../Adventuring/Social/Social#Disposition|disposition]]. Temporary changes usually last for a [[../../Gameplay/Timekeeping#Scene|scene]] or an [[../../Gameplay/Timekeeping#Encounter|encounter]] and at its end the target's disposition either reverts to its initial value or it suffers a similar but opposite change.
 > For example, you have used your weapon to intimidate a guard to allow you into a locked down facility. Their disposition changes to helpful for the time being, but as soon as you leave them out of sight they will turn to hostile.

When commanding others, either by authority, inspiration, or planning, you make can make a check that will provide some bonuses, equal to your  [[../../Gameplay/Gameplay#Difficulty & Degree of Success/Failure (DoS/DoF)|degree of success]], that your allies can use later within the same [[../../Gameplay/Timekeeping#Turn|turn]]/[[../../Gameplay/Timekeeping#Encounter|encounter]].
These bonuses can be either:
- A +1 [[../../Gameplay/Bonuses & Penalties/Morale|morale]] or [[../../Gameplay/Bonuses & Penalties/Synergy|synergy]] [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|bonus]] on any related check.
- Redirection of all damage received by one ally to another.

In addition, social manoeuvres can generally be used to invoke the following effects:
- ❗Lust
- ❗Taunted
- ...

# Social [[../../Characters/Aspects/Aspects|Aspects]]
```dataview
LIST
FROM #rules/characters/aspect/social AND -"_templates"
SORT file.name ASC
```

# Social Perks
```dataview
LIST
FROM #rules/characters/perk/social AND -"_templates"
SORT file.name ASC
```
