---
tags:
  - rules/characters
---
Your overall health is described by your [[../Attributes/Attributes#Category/Trait Score|trait scores]] and any debilitations you may be suffering from.

# Injury
While adventuring, you may get involved into dangerous [[../../Gameplay/Timekeeping/Timekeeping#Encounter|encounters]]. During these you may suffer [[../../Gameplay/Timekeeping/Timekeeping#Damage|damage]], which translates to injury.
When you are the recipient of damage, you make an [[../../Gameplay/Resources/Resources#Expenditure|expenditure]] check on the relevant [[../Attributes/Attributes|attribute's]] current score, with target equal to the damage suffered.
If the expenditure succeeds, your relevant attribute's current score is reduced by 1 step immediately.

Injuries remain with you until they are healed.

# Effects
Besides [[#Injury|injury]], you can also be affected from [[#Boons|boons]], [[#Banes|banes]], [[#Conditions|conditions]], [[#Diseases|diseases]], [[#Poisons|poisons]], and [[#Drugs|drugs]].

Effects share the following properties:
- [[#Severity]]
- [[#Defensive Trait]]
- [[#Vector]]
- [[#Repeat (interval, target)]]
- [[#Incubation (time)]]
- ❗TL/❗ML

If you are targeted with an effect you are already suffering from, you suffer an [[../../Gameplay/Bonuses & Penalties/Injury|injury]] [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|penalty]] on your defensive check equal to the effect's current [[#Severity|severity]].
If you fail the defensive check, you roll an [[../../Gameplay/Resources/Resources#Accumulation|accumulation]] check on the effect's severity level. The target is usually set by what imposed the effect.
> For example, you are currently burning, with a severity of d8. An enemy targets you with a flaming arrow, which sets you on fire normally. Attempting to resist the effect suffers a d8 injury penalty, and if you fail, you make an accumulation check on the d8 (target equal to the attacker's DoS) to see if the burning condition worsens to d10.

#### Severity
All effects come with a [[../../Gameplay/Resources/Resources|score]], called severity, which indicates how much they are affecting you.
This score is considered a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|bonus or penalty]] wherever applicable, depending on the effect.

Most effects have a minimum score, which needs to be reached for them to take effect.
> For example, haste's bonuses are applied only once its severity reaches d6.

Similarly, some have a terminal score, which when reached applies something different usually.
> For example, petrified has a terminal score of d12. When the condition's severity reaches d12 you turn to stone.

Finally, effects may have cumulative effects, depending on their severity, with less severe situations affecting you minimally, but as severity increases you become more and more affected.

#### Defensive Trait
The [[../Attributes/Attributes#Category/Trait Score|trait score]] that can be used to resist the effect. If multiple, you select which one you will use.

#### Vector
A disease, poison, or drug may belong to multiple types; in these cases it can be applied in any way applicable.
- Contact ([[../../Gameplay/Resources/Resources|resource]]): Applied as soon as it comes in contact with your skin.
- Fluids ([[../../Gameplay/Resources/Resources|resource]]): Applied as soon as your bodily fluids come in contact with an infectious agent, usually other infected fluids.
- Ingested: Must be administered through food or drink.
- Inhaled: Is airborne and must be inhaled to be effective.
- Injury ([[../../Gameplay/Resources/Resources|resource]]): Must be delivered directly into the bloodstream, either through a weapon attack, a hypodermal syringe, or something similar.

- [I] The resource meter counts one application use duration.
> For example, an injury resource is expended every time you attack, while a contact poison is expended every time someone touches the surface it is on. When the stockpile is drained, the poison won't be applied any more.

#### Repeat (interval, target)
The time scale the effect is reapplied on its own.
At every repeat interval, you make a resource check with the repeat target. On a success, the effect's [[#Severity|severity]] increases by 1 step.
If the effect imposes an immediate effect, you also suffer the consequences at every repeat interval, regardless of its severity changing.

#### Incubation (time)
The effect does not get applied immediately but after the incubation period ends.

#### Healing
An explanation on how the effect can be healed.

## Banes
Banes are short-term negative effects that may affect your performance negatively or limit you in some way.

## Conditions
Conditions are [[#Banes|banes]] that have a specific duration, or have specific requirements to be lifted, or are triggered under specific circumstances. 

## Boons
Boons are positive conditions affecting you at the time.

## Diseases
A disease is something anything causes by foreign organisms attacking you from the inside, like a virus or bacteria.

## Poisons
Poisons are substances that cause adverse effects when delivered to your body, mind, or soul.

## Drugs
Drugs, like poisons, are substances that cause both beneficial and adverse effects to the one using them, but they come with the danger of addiction every time a drug is used.

# Exhaustion
Almost everything you do, either while adventuring or during downtime, causes fatigue.
When fatigue accumulates, you suffer exhaustion.

Exhaustion applies directly to each [[../Attributes/Attributes#Category/Trait Score|attribute category]] as a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|penalty]] ([[../../Gameplay/Resources/Resources|resource]]).
Each time you suffer fatigue, you must succeed on an appropriate ❗defensive check. If you fail, you suffer exhaustion, or your current exhaustion may increase - make an [[../../Gameplay/Resources/Resources#Accumulation|accumulation]] check on your current exhaustion score.

# Damage Immunity, Resistance, & Vulnerability


# Health Related Perks
```dataview
LIST
FROM #rules/gameplay/health AND #rules/characters/perk/trait AND -"_templates"
SORT file.name ASC
```
