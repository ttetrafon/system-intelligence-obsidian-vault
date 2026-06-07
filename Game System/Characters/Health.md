---
tags:
  - rules/characters
---
Your overall health is described by your [[Attributes.md#Category/Trait Score|trait scores]] and any debilitations you may be suffering from.

# Injury
While adventuring, you may get involved into dangerous [[../Gameplay/Timekeeping.md#Encounter|encounters]]. During these you may suffer [[../Gameplay/Timekeeping.md#Damage|damage]], which translates to injury.
When you are the recipient of damage, you make an [[../Gameplay/Resources.md#Expenditure|expenditure]] check on the relevant [[Attributes.md|attribute's]] current score, with target equal to the damage suffered.
If the expenditure succeeds, your relevant attribute's current score is reduced by 1 step immediately.

Injuries remain with you until they are healed.

# Conditions

...

# Exhaustion
Almost everything you do, either while adventuring or during downtime, causes fatigue.
When fatigue accumulates, you suffer exhaustion.

Exhaustion applies directly to each [[Attributes.md#Category/Trait Score|attribute category]] as a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|penalty](Bonuses%20&%20Penalties.md) ([[../Gameplay/Resources.md|resource]]).
Each time you suffer fatigue, you must succeed on an appropriate ❗defensive check. If you fail, you suffer exhaustion, or your current exhaustion may increase - make an [[../Gameplay/Resources.md#Accumulation|accumulation]] check on your current exhaustion score.

# Recovery
Recovering from [[#Injury|injuries]] and [[#Effects|effects]] requires [[Health/Resting.md|rest]] and/or [[../Gameplay/Descriptors%20(Tags)/Healing.md|healing]] magic/technology to be used.

For [[#Injury|injuries]], a recovery check is simply an [[../Gameplay/Resources.md#Accumulation|accumulation]] check at the current damaged [[Attributes.md|attribute]] score.

For other [[#Effects|effects]], recovery is an [[../Gameplay/Resources.md#Expenditure|expenditure]] check instead, at the current effect's severity.
Most times, you can make recover checks only when allowed to.


# Damage Immunity, Resistance, & Vulnerability
If you have immunity to a [[../../Gameplay/Descriptors (Tags)/Descriptors (Tags)#Descriptive Tags|descriptor](Descriptors%20(Tags).md) or [[../../Gameplay/Descriptors (Tags)/Descriptors (Tags)#Damage Categories|damage type](Descriptors%20(Tags).md) you ignore all [[../Gameplay/Timekeeping.md#Damage|damage]] associated with it.

Similarly to immunity, a resistance directly reduces incoming [[../Gameplay/Timekeeping.md#Damage|damage]] by acting as a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|bonus](Bonuses%20&%20Penalties.md) on your [[Attributes.md#Defensive Check|defensive checks]].
The bonus level and type both depend on the source.
> For example, if you have fire resistance 3 from your ❗Cloak of the Elements, you gain a +1d8 [[../../Gameplay/Bonuses & Penalties/Enhancement|enhancement](../Gameplay/Bonuses%20&%20Penalties/Enhancement.md) bonus on your defensive checks to shrug off incoming fire damage.

Vulnerability is like resistance, but acts as a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|penalty](Bonuses%20&%20Penalties.md) on your [[Attributes.md#Defensive Check|defensive checks]].

# Death
…

# Health Related Perks
```dataview
LIST
FROM #rules/gameplay/health AND #rules/characters/perk/trait AND -"_templates"
SORT file.name ASC
```
