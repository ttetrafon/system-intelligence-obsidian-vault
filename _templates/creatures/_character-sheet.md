---
tags:
  - creature
  - character
  - character-sheet
APP: 47
DEX: 58
END: 16
MIG: 45
TEC: 65
IMA: 31
MEM: 40
PER: 23
REA: 38
WIL: 24
CON: 26
EMP: 52
PRE: 19
RES: 56
WIS: 47
appResult: ""
dexResult: ""
endResult: ""
migResult: ""
tecResult: ""
imaResult: ""
memResult: ""
perResult: ""
reaResult: ""
wilResult: ""
conResult: ""
empResult: ""
preResult: ""
resResult: ""
wisResult: ""
size: 5
encumbrance: 1280
LUCK: d12
luckTarget: 6
luckResult: ""
---
%% Info-box controls for later %%
```meta-bind-button
label: Clear all Check Results
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: js
    file: _scripts/clear_all_check_results.js
    args: {}

```


# General
- [[../../Game System/Characters/Characteristics/Size/Size|Size]]: `INPUT[inlineSelect(option(1, diminutive), option(2, fine), option(3, tiny), option(4, small), option(5, medium), option(6, large), option(7, huge), option(8, enormous), option(9, gargantuan), option(10, colossal), option(11, mammoth), option(12, titanic), defaultValue(5)):size]` ([[../../Game System/Characters/Characteristics/Encumbrance|encumbrance]] `VIEW[{encumbrance} / 4]`/`VIEW[{encumbrance} / 2]`/`VIEW[{encumbrance} * 3 / 4]`/`VIEW[{encumbrance}]`)
- [[../../Game System/Checks & Dice/Bonuses & Penalties/Luck|Luck]]: `VIEW[{LUCK}]`

# [[../../Game System/Characters/Attributes/Attributes|Attributes]]

| [[../../Game System/Characters/Attributes/Attributes#Body\|BODY]] |     Score     |       *roll*       | *result*            | [[../../Game System/Characters/Attributes/Attributes#Mind\|Mind]]  |     Score     |       *roll*       | *result*            | [[../../Game System/Characters/Attributes/Attributes#Soul\|Soul]] |     Score     |       *roll*       | *result*            |
| :---------------------------------------------------------------: | :-----------: | :----------------: | :------------------ | :----------------------------------------------------------------: | :-----------: | :----------------: | :------------------ | :---------------------------------------------------------------: | :-----------: | :----------------: | ------------------- |
| [[../../Game System/Characters/Attributes/Appearance (APP)\|APP]] | `VIEW[{APP}]` | `BUTTON[roll-app]` | `VIEW[{appResult}]` | [[../../Game System/Characters/Attributes/Imagination (IMA)\|IMA]] | `VIEW[{IMA}]` | `BUTTON[roll-ima]` | `VIEW[{imaResult}]` | [[../../Game System/Characters/Attributes/Conviction (CON)\|CON]] | `VIEW[{CON}]` | `BUTTON[roll-con]` | `VIEW[{conResult}]` |
| [[../../Game System/Characters/Attributes/Dexterity (DEX)\|DEX]]  | `VIEW[{DEX}]` | `BUTTON[roll-dex]` | `VIEW[{dexResult}]` |   [[../../Game System/Characters/Attributes/Memory (MEM)\|MEM]]    | `VIEW[{MEM}]` | `BUTTON[roll-mem]` | `VIEW[{memResult}]` |  [[../../Game System/Characters/Attributes/Empathy (EMP)\|EMP]]   | `VIEW[{EMP}]` | `BUTTON[roll-emp]` | `VIEW[{empResult}]` |
| [[../../Game System/Characters/Attributes/Endurance (END)\|END]]  | `VIEW[{END}]` | `BUTTON[roll-end]` | `VIEW[{endResult}]` | [[../../Game System/Characters/Attributes/Perception (PER)\|PER]]  | `VIEW[{PER}]` | `BUTTON[roll-per]` | `VIEW[{perResult}]` |  [[../../Game System/Characters/Attributes/Presence (PRE)\|PRE]]  | `VIEW[{PRE}]` | `BUTTON[roll-pre]` | `VIEW[{preResult}]` |
|   [[../../Game System/Characters/Attributes/Might (MIG)\|MIG]]    | `VIEW[{MIG}]` | `BUTTON[roll-mig]` | `VIEW[{migResult}]` |   [[../../Game System/Characters/Attributes/Reason (REA)\|REA]]    | `VIEW[{REA}]` | `BUTTON[roll-rea]` | `VIEW[{reaResult}]` |  [[../../Game System/Characters/Attributes/Resolve (RES)\|RES]]   | `VIEW[{RES}]` | `BUTTON[roll-res]` | `VIEW[{resResult}]` |
| [[../../Game System/Characters/Attributes/Technique (TEC)\|TEC]]  | `VIEW[{TEC}]` | `BUTTON[roll-tec]` | `VIEW[{tecResult}]` |  [[../../Game System/Characters/Attributes/Willpower (WIL)\|WIL]]  | `VIEW[{WIL}]` | `BUTTON[roll-wil]` | `VIEW[{wilResult}]` |   [[../../Game System/Characters/Attributes/Wisdom (WIS)\|WIS]]   | `VIEW[{WIS}]` | `BUTTON[roll-wis]` | `VIEW[{wisResult}]` |


---

> [!info]+ Training
> ... (all the next sessions will be collapsed inside here)

### Randomise Character
```meta-bind-button
label: Randomise Character
icon: ""
hidden: false
class: ""
tooltip: ...
id: randomise-character
style: default
actions:
  - type: js
    file: _scripts/randomise_character.js
    args: {
    }
```

### [[../../Game System/Characters/Attributes/Attributes|Attributes]]

| [[../../Game System/Characters/Attributes/Attributes\|Attributes]]               |        Current Score        |
|:-------------------------------------------------------------------------------- |:---------------------------:|
| [[../../Game System/Characters/Attributes/Appearance (APP)\|Appearance (APP)]]   | `INPUT[number-input][:APP]` |
| [[../../Game System/Characters/Attributes/Dexterity (DEX)\|Dexterity (DEX)]]     | `INPUT[number-input][:DEX]` |
| [[../../Game System/Characters/Attributes/Endurance (END)\|Endurance (END)]]     | `INPUT[number-input][:END]` |
| [[../../Game System/Characters/Attributes/Might (MIG)\|Might (MIG)]]             | `INPUT[number-input][:MIG]` |
| [[../../Game System/Characters/Attributes/Technique (TEC)\|Technique (TEC)]]     | `INPUT[number-input][:TEC]` |
| [[../../Game System/Characters/Attributes/Imagination (IMA)\|Imagination (IMA)]] | `INPUT[number-input][:IMA]` |
| [[../../Game System/Characters/Attributes/Memory (MEM)\|Memory (MEM)]]           | `INPUT[number-input][:MEM]` |
| [[../../Game System/Characters/Attributes/Perception (PER)\|Perception (PER)]]   | `INPUT[number-input][:PER]` |
| [[../../Game System/Characters/Attributes/Reason (REA)\|Reason (REA)]]           | `INPUT[number-input][:REA]` |
| [[../../Game System/Characters/Attributes/Willpower (WIL)\|Willpower (WIL)]]     | `INPUT[number-input][:WIL]` |
| [[../../Game System/Characters/Attributes/Conviction (CON)\|Conviction (CON)]]   | `INPUT[number-input][:CON]` |
| [[../../Game System/Characters/Attributes/Empathy (EMP)\|Empathy (EMP)]]         | `INPUT[number-input][:EMP]` |
| [[../../Game System/Characters/Attributes/Presence (PRE)\|Presence (PRE)]]       | `INPUT[number-input][:PRE]` |
| [[../../Game System/Characters/Attributes/Resolve (RES)\|Resolve (RES)]]         | `INPUT[number-input][:RES]` |
| [[../../Game System/Characters/Attributes/Wisdom (WIS)\|Wisdom (WIS)]]           | `INPUT[number-input][:WIS]` |

### [[../../Game System/Checks & Dice/Resources|Resources]]
|                                                             | Current Value                  |                                    *check*                                     |       *result*       |
| :---------------------------------------------------------: | ------------------------------ | :----------------------------------------------------------------------------: | :------------------: |
| [[../../Game System/Characters/Characteristics/Luck\|Luck]] | `INPUT[resource-score][:LUCK]` | `BUTTON[spend-luck]` `INPUT[resource-target][:luckTarget]` `BUTTON[gain-luck]` | `VIEW[{luckResult}]` |




---
- [!] Do not write under this line!
%% The following are helper functions and will be invisible. %%
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll APP
id: roll-app
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "APP"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll DEX
id: roll-dex
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "DEX"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll END
id: roll-end
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "END"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll MIG
id: roll-mig
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "MIG"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll TEC
id: roll-tec
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "TEC"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll IMA
id: roll-ima
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "IMA"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll MEM
id: roll-mem
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "MEM"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll PER
id: roll-per
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "PER"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll REA
id: roll-rea
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "REA"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll WIL
id: roll-wil
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "WIL"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll CON
id: roll-con
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "CON"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll EMP
id: roll-emp
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "EMP"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll PRE
id: roll-pre
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "PRE"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll RES
id: roll-res
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "RES"
    }
```
```meta-bind-button
label: "🎲"
hidden: true
class: ""
tooltip: Roll WIS
id: roll-wis
style: plain
actions: 
  - type: js
    file: _scripts/roll_check.js
    args: {
	    "attribute": "WIS"
    }
```
```meta-bind-js-view
{MIG} as var1
{DEX} as var2
{size} as size
save to {encumbrance}
hidden
---
return Math.max(Math.floor(context.bound.var1 / 10), Math.floor(context.bound.var2 / 10)) * Math.pow(4, context.bound.size - 1);
```
```meta-bind-js-view
{MIG} as var1
{DEX} as var2
{size} as size
save to {encumbrance}
hidden
---
let enc = Math.max(Math.floor(context.bound.var1 / 10), Math.floor(context.bound.var2 / 10)) * Math.pow(4, context.bound.size - 1);
return enc;
```
```meta-bind-button
label: "+"
icon: ""
hidden: true
class: ""
tooltip: Gain LUCK
id: gain-luck
style: default
actions:
  - type: js
    file: _scripts/roll_resource_change.js
    args: {
	    "direction": 1,
	    "resource": "LUCK"
    }
```
```meta-bind-button
label: "-"
icon: ""
hidden: true
class: ""
tooltip: Spend LUCK
id: spend-luck
style: default
actions:
  - type: js
    file: _scripts/roll_resource_change.js
    args: {
	    "direction": -1,
	    "resource": "LUCK"
    }
```
