---
tags:
  - rules/characters
---
Your overall health is described by your [[../Attributes/Attributes#Category/Trait Score|trait scores]] and any debilitations you may be suffering from.

# Injury
While adventuring, you may get involved into dangerous [[Timekeeping#Encounter|encounters]]. During these you may suffer [[Timekeeping#Damage|damage]], which translates to injury.
When you are the recipient of damage, you make an [[Resources#Expenditure|expenditure]] check on the relevant [[../Attributes/Attributes|attribute's]] current score, with target equal to the damage suffered.
If the expenditure succeeds, your relevant attribute's current score is reduced by 1 step immediately.

Injuries remain with you until they are healed.

# Conditions

...

# Exhaustion
Almost everything you do, either while adventuring or during downtime, causes fatigue.
When fatigue accumulates, you suffer exhaustion.

Exhaustion applies directly to each [[../Attributes/Attributes#Category/Trait Score|attribute category]] as a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|penalty]] ([[Resources|resource]]).
Each time you suffer fatigue, you must succeed on an appropriate ❗defensive check. If you fail, you suffer exhaustion, or your current exhaustion may increase - make an [[Resources#Accumulation|accumulation]] check on your current exhaustion score.

# Recovery
Recovering from [[#Injury|injuries]] and [[#Effects|effects]] requires [[Resting|rest]] and/or [[Healing|healing]] magic/technology to be used.

For [[#Injury|injuries]], a recovery check is simply an [[Resources#Accumulation|accumulation]] check at the current damaged [[../Attributes/Attributes|attribute]] score.

For other [[#Effects|effects]], recovery is an [[Resources#Expenditure|expenditure]] check instead, at the current effect's severity.
Most times, you can make recover checks only when allowed to.


# Damage Immunity, Resistance, & Vulnerability
If you have immunity to a [[../../Gameplay/Descriptors (Tags)/Descriptors (Tags)#Descriptive Tags|descriptor]] or [[../../Gameplay/Descriptors (Tags)/Descriptors (Tags)#Damage Categories|damage type]] you ignore all [[Timekeeping#Damage|damage]] associated with it.

Similarly to immunity, a resistance directly reduces incoming [[Timekeeping#Damage|damage]] by acting as a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|bonus]] on your [[../Attributes/Attributes#Defensive Check|defensive checks]].
The bonus level and type both depend on the source.
> For example, if you have fire resistance 3 from your ❗Cloak of the Elements, you gain a +1d8 [[../../Gameplay/Bonuses & Penalties/Enhancement|enhancement]] bonus on your defensive checks to shrug off incoming fire damage.

Vulnerability is like resistance, but acts as a [[../../Gameplay/Bonuses & Penalties/Bonuses & Penalties|penalty]] on your [[../Attributes/Attributes#Defensive Check|defensive checks]].

# Death
…

# Health Related Perks
```dataview
LIST
FROM #rules/gameplay/health AND #rules/characters/perk/trait AND -"_templates"
SORT file.name ASC
```
