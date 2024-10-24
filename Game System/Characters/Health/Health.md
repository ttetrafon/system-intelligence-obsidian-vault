---
tags:
  - rules
---
Your overall health is described by any debilitations and effects you may be affected from.

### Severity Level
Each of the effects come in three levels (I, II, III), each level more effective than the previous ones. Note that effects of levels are cumulative, unless overridden.

### Damage
Damage is a generic term that describes the possibility of suffering, or benefiting, from an incoming effect.
You may *suffer damage* in many different situations, like an enemy stabs you, a stranger tries to seduce you, an ally casts a beneficial spell on you, and so on.

Incoming damage is always tied to the initiator's check [[../../Checks & Dice/Checks & Dice#Difficulty & Degree of Success/Failure (DoS/DoF)|DoS]].
At that time, you make a defensive check based on the appropriate [[../Attributes/Attributes#Category/Trait Score|trait score]] to reduce, or even completely resist, the incoming damage.
If after your defensive check the initiator's [[../../Checks & Dice/Checks & Dice#Difficulty & Degree of Success/Failure (DoS/DoF)|DoS]] is not 0, you suffer an appropriate effect at a [[#Severity Level|severity level]] equal to that [[../../Checks & Dice/Checks & Dice#Difficulty & Degree of Success/Failure (DoS/DoF)|DoS]].

- [I] Note that you must always attempt to resist beneficial effects too, you do not have a choice.


# Types of Effects

## Wounds & Injuries
During your adventuring, you may become ***injured*** or ***wounded***. Injuries are serious and require long-term healing, while wounds get better much more easily. Injuries and wound always relate to your body, mind, and spirit, and corelate to individual attributes.

> For example, a gun wound may have injured your arm, penalising your DEX, while a psychic spell may have muddled your reasoning ability, penalising your REA.

Penalties from wounds and injuries apply to the related [[../Attributes/Attributes|attribute]] checks.

#### Wound penalties
1. suffer [[../../Checks & Dice/Checks & Dice#Advantage & Disadvantage|disadvantage 1]]
2. Increase [[../../Checks & Dice/Checks & Dice#Difficulty & Degree of Success/Failure (DoS/DoF)|difficulty]] of related checks by 1 step.
3. Cannot make checks at all with the attribute in question. You also suffer the [[Incapacitated|incapacitated]] condition.

#### Injury penalties
1. suffer [[../../Checks & Dice/Checks & Dice#Advantage & Disadvantage|disadvantage 2]]
2. Increase [[../../Checks & Dice/Checks & Dice#Difficulty & Degree of Success/Failure (DoS/DoF)|difficulty]] of related checks by 2 steps.
3. Cannot make checks at all with the attribute in question. You also suffer the [[Incapacitated|incapacitated]] and ❗dying conditions.

## Boons
Boons are positive conditions affecting you at the time.
```dataview
LIST
FROM #health AND #boon AND -"_templates"
SORT file.name ASC
```

## Banes
Banes are short-term negative effects that may affect your performance negatively or limit you in some way.
```dataview
LIST
FROM #health AND #bane AND -"_templates"
SORT file.name ASC
```

## Conditions
Conditions are banes that have a specific duration, or have specific requirements to be lifted, or are triggered under specific circumstances.
```dataview
LIST
FROM #health AND #condition AND -"_templates"
SORT file.name ASC
```

## Diseases
A disease is something anything causes by foreign organisms attacking you from the inside, like a virus or bacteria.
```dataview
LIST
FROM #health AND #disease AND -"_templates"
SORT file.name ASC
```

## Poisons
Poisons are substances that cause adverse effects when delivered to your body, mind, or soul.
```dataview
LIST
FROM #health AND #poison AND -"_templates"
SORT file.name ASC
```

## Drugs
Drugs, like poisons, are substances that cause both beneficial and adverse effects to the one using them, but they come with the danger of addiction every time a drug is used.
```dataview
LIST
FROM #health AND #drug AND -"_templates"
SORT file.name ASC
```

# Effect Description
All effects are described by the following properties.

##### Defensive Trait
The [[../Attributes/Attributes#Category/Trait Score|trait score]] that can be used to resist the effect. If multiple, you select which one you will use.

##### Difficulty
How [[../../Checks & Dice/Checks & Dice#Difficulty & Degree of Success/Failure (DoS/DoF)|difficult]] it is to resist or invoke the effect. The number defines the degree of success you require to invoke or resist the effect successfully.

###### Repeated Exposure
If the effect is applied again, if it is within the incubation period, its difficulty is increased by 1. If it is already affecting you, it instead may have its level increased if you fail to resist it again.

##### Vector
A [[#Diseases|disease]], [[#Poisons|poison]], or [[#Drugs|drug]] may belong to multiple types; in these cases it can be applied in any way applicable.
- **Contact (stockpile)**: Applied as soon as it comes in contact with your skin.
- **Fluids (stockpile)**: Applied as soon as your bodily fluids come in contact with an infectious agent, usually other infected fluids.
- I**ngested**: Must be administered through food or drink.
- **Inhaled**: Is airborne and must be inhaled to be effective.
- **Injury (stockpile)**: Must be delivered directly into the bloodstream, either through a weapon attack, a hypodermal syringe, or something similar.

The *stockpile* meter counts the duration when applied for use. For example, an injury stockpile is expended every time you attack, while a contact poison is expended every time someone touches the surface it is on. When the stockpile is drained, the disease/poison/drug won't be applied any more.

##### Healing
An explanation on how the effect can be healed.

##### Repeat
The time scale the effect is reapplied on its own. You must again resist the effect. On a failure it worsens by 1 severity level. On a success, it either stays the same (degree of success 1-2), or improves by 1 severity level (degree of success 3+). If this has some immediate effect, you immediately suffer it regardless of any level change.

###### Incubation
The effect does not get applied immediately but after the incubation period ends.

##### TL, ML
The effect's [[../../Technology/Technology#Technology Level (TL)|TL]] and [[../../Magic/Magic#Magic Level (ML)|ML]].
