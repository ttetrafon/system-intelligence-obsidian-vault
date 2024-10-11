---
data1: 2000-10-21
time1: 05:09
completed: false
rating: good
distance: 16
name: Nakis
other_bind_target: res = 105
bind_target_1: 15
bind_target_2: 7
editor1: |-
  This is some text!
  It will persist, as it is designed for this...

  ### And then a subtitle!
  And some more text!
textarea: Something or other...
ratingNumeric: 3
progress: 31
progress_red: 58
count: 3
---

# Inputs
#### Dates
`INPUT[date:data1]`

`INPUT[datePicker:data1]`

#### Time
`INPUT[time:time1]`

#### Editor
- [!] block only
- [I] Supports markdown!
```meta-bind
INPUT[editor:editor1]
```

#### Toggle
`INPUT[toggle:completed]`  Check me! `INPUT[toggle:completed]`

#### Selector
Text result: `INPUT[inlineSelect(option(bad), option(meh), option(ok), option(good), option(great)):rating]`
Numeric result: `INPUT[inlineSelect(option(1, bad), option(2, meh), option(3, ok), option(4, good), option(5, great), defaultValue(3)):ratingNumeric]`

#### Number
Distance: `INPUT[number:distance]`

#### Text
Name: `INPUT[text(placeholder(Name)):name]`

#### Text Area
`INPUT[textArea(placeholder(Type something...)):textarea]`

#### Suggester
`INPUT(suggester():suggester_selection)`

#### Image Suggester
- [!] Block only
```meta-bind
INPUT[imageSuggester(optionQuery("_attachments")):image]
```

#### Progress Bar
- [!] Block only
```meta-bind
INPUT[progressBar:progress]
```
```meta-bind
INPUT[progressBar(class(red-progress-bar)):progress_red]
```

# Views
#### Conversion
Distance: `VIEW[{distance}]` km / `VIEW[round(number({distance} km, miles), 2)]` miles

#### Dates
Date-1: `VIEW[{data1}]`

#### Image
`VIEW[{image}]`


# Buttons
```meta-bind-button
label: "+1"
hidden: true
id: "count-increment"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: true
    value: x + 1
```
#### Counter
```meta-bind-button
label: "-1"
hidden: true
id: "count-decrement"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: true
    value: x - 1
```

```meta-bind-button
label: "Reset"
hidden: true
id: "count-reset"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: false
    value: 0
```

`BUTTON[count-decrement, count-reset, count-increment]` 
Value: `VIEW[{count}]`


# JS View Fields

- [!] Requires `js-engine` to be installed and enabled.

```meta-bind-js-view
{bind_target_1} as var1
{bind_target_2} as var2
save to {other_bind_target}
---
return `res = ${context.bound.var1 * context.bound.var2}`;
```

- [I] A view field can be hidden by adding `hidden` before the `---`.
