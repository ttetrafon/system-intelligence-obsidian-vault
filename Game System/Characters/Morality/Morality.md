---
tags:
  - rules/characters/morality
---
Your actions define who you are and what other perceive of you; your morality and your reputation.
Morality is usually rolled as part of [[../../Gameplay/Checks & Dice|normal checks]], especially during opposed checks against others.

Your morality is counted in many different axes; some complementing, others competing. These axes are determined by the ❗Deck of Dragons.

|             |              |
| :---------- | -----------: |
| Valorous    |     Cowardly |
| Forgiving   |     Vengeful |
| Just        |    Arbitrary |
| Peaceful    |      Violent |
| Trusting    |   Suspicious |
| Honest      |    Deceitful |
| Merciful    |        Cruel |
| Generous    |       Greedy |
| Selfless    | Narcissistic |
| Chaste      |   Hedonistic |
| Modest      |        Proud |
| Prudent     |     Reckless |
| Energetic   |         Lazy |
| Pious       |      Worldly |
| Curious     | Close-minded |
| Disciplined |       Unruly |
| Intuitive   |      Logical |
| Extroverted |  Introverted |
| Life-giver  |   Life-taker |
| Biophile    |  Technophile |
Each of your moral trait is a resource, with a maximum of d20. At the same time, each pair needs  to follow the pattern in the following list, which means when one in a pair changes, the other one changes accordingly to keep the total the same.
- d20 - d4
- d12 - d6
- d10 - d8
- d8 - d10
- d6 - d12
- d4 - d20
> For example, you may be just d10, arbitrary d8. Increasing just to d12means arbitrary drops to d6 automatically.

#### Affinity
If your score in a moral is d8 to d12, you are considered to have a minor affinity, while when it gets to d20 you are considered to have a major affinity.
Affinity is oftentimes a requirement for gaining perks or taking specific actions.

```dataview
LIST
FROM #rules/characters/perk AND #rules/characters/morality AND -"_templates"
SORT file.name ASC
```

# Morality Checks
As a player, you are controlling a character in a roleplaying game.
Sometimes, it is difficult to act appropriately, as you can see consequences as a player that your character shouldn't or can't predict.
In these cases, the GM may ask you to make a morality check to enforce or stop an action your character is taking.
In this case you roll both of the moral scores in the axis in question, and the one with the best [[../../Gameplay/Checks & Dice#Difficulty & Degree of Success/Failure (DoS/DoF)|DoS]] wins. You must then follow according to your character's morals and not your own will as a player.
> For example, you are being given a tour within the mansion of a very wealthy individual, and you are currently in their vault. Something happens and they rush outside forgetting about your existence. You, as a player, decide to wait for them to come back without touching anything. But your character, being generous d6 - greedy d12 is not one to sit and wait while such riches are at hand. The GM asks you to make a generous vs greedy check, and you end up with greedy winning.

Such checks are mostly invoked when your morals are extreme, usually at d12 or d20.

## Morality Changes
At the end of each scene, you can declare that one or more of your traits have changed. Your GM must approve of the change.
If so, you make an [[../../Gameplay/Resources#Accumulation|accumulation]] check to increase that morality score.

Also, the GM may also declare that you must roll to change a morality score based on your actions during a scene or session, regardless of your wishes.

A morality change situation can have an impact on your morality score. Each of these levels limit the maximum morality score past which you cannot increase your current score.
- lesser: max d8
- normal: max d12
- greater: max d20
> For example, giving alms to the poor is usually a lesser effect, which means you cannot increase your generous trait beyond d8. Similarly, taking a bullet to save someone else can have a greater effect on your selfless moral.

> During your adventuring (you are generous d4 - greedy d20), you have given alms to a poor you took pity upon. Giving alms is of lesser impact, so you roll d4 for 1, which means you increase your generous score to d6. At the same time, your greedy score drops to d12.

### Forced Morality Change
During downtime you can spend time in various activities with the purpose of increasing or lowering one of your morality trait scores. You make a check once per cycle as per the guidelines above. Each attempt to change your morals takes one [[../../Gameplay/Timekeeping#Downtime|downtime activity]].