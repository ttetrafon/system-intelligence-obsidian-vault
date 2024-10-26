---
tags:
  - rules
---
# Aspects
An aspect is a profession, hobby, career, discipline, or anything similar that defines a skillset you have acquired during your life or adventuring. Each aspect includes a number of skills which define it, but an aspect's skill list is not limited to the ones presented below. Aspects can be used instead of skills, for a more generic progression system, absconding the need to keep track of specific skills.

Aspects are divided in minor and major, depending on how encompassing they are.
> Hobbies for example are usually minor aspects, while professions are major.

## Specific vs General Use
Many aspects apply only to a specific domain (organisation, culture, civilisation, terrain etc). Sometimes you can use these skills with other domains, but you suffer [[../../Checks & Dice/Checks & Dice#Advantage & Disadvantage|disadvantage]] of 1 to 5, depending on the situation.

You can add extra domains for an aspect as perks under that aspect.

## Aspect Lists

### Academics


### Administrators


### Adventurers


### Agriculture & Animal Husbandry


### Artists


### Background


### Chief Executives


### Clerical Professionals


### Crafters


### Cultural Professionals


### Engineers


### Financial Professionals


### Food Professionals


### Fortune Tellers


### IT Professionals


### Labourers


### Legislators


### Life Scientists


### Magic Users


### Medical Practitioners


### Military Professionals


### Operators


### Outlaws


### Physical Scientists


### Servants


### Social Professionals


### Technicians



# Skills
Skills describe what you can and cannot do, and how well you perform at it. You [[Experience & Training]] skills and gain ranks, which improves your performance and chance of success when undertaking related tasks. Most of the checks in the game are skill checks.

Skills are divided into ***simple*** and ***complex*** skills, depending on how difficult is to learn each one.

## Skill Training & [[../../Checks & Dice/Checks & Dice|Checks]]
Each skill is associated with three attributes and can be ***trained*** or ***untrained***.

When you are untrained, you can never attempt *complex* skills, but you can do so for *simple* ones. Untrained checks are made with the worst [[../Attributes/Attributes|attribute]] between the three associated ones.

Becoming trained in a skill is a [[../../Gameplay & Timekeeping/Gameplay & Timekeeping#Tasks (Long-Term Activities)|task]] with complexity 75 for simple skills and 125 for complex skills.
While in training, skill checks are attempted by using the median of the two lowest associated attribute scores.

When trained, you use the median of all three associated attribute scores to make skill checks.

## Skill Lists

### [[../../Artistry/Artistry|Artistry]]
```dataview
LIST
FROM (#skill/simple/artistry OR #skill/complex/artistry) AND -"_templates"
SORT file.name ASC
```

### [[../../Combat/Combat|Combat]]
```dataview
LIST
FROM (#skill/simple/combat OR #skill/complex/combat) AND -"_templates"
SORT file.name ASC
```

### [[../../Exploration/Exploration|Exploration]]
```dataview
LIST
FROM (#skill/simple/exploration OR #skill/complex/exploration) AND -"_templates"
SORT file.name ASC
```

### [[../../Occult/Occult|Occult]]
```dataview
LIST
FROM (#skill/simple/occult OR #skill/complex/occult) AND -"_templates"
SORT file.name ASC
```

### [[../../Science/Science|Science]]
```dataview
LIST
FROM (#skill/simple/science OR #skill/complex/science) AND -"_templates"
SORT file.name ASC
```

### [[../../Social/Social|Social]]
```dataview
LIST
FROM (#skill/simple/social OR #skill/complex/social) AND -"_templates"
SORT file.name ASC
```

### [[../../Subterfuge/Subterfuge|Subterfuge]]
```dataview
LIST
FROM (#skill/simple/subterfuge OR #skill/complex/subterfuge) AND -"_templates"
SORT file.name ASC
```

### [[../../Technology/Technology|Technology]]
```dataview
LIST
FROM (#skill/simple/technology OR #skill/complex/technology) AND -"_templates"
SORT file.name ASC
```


# Perks
Perks are special abilities that augment your aspects and skills. They are gained through your life experiences, although sometimes you may train to gain one.
Perks have ranks (N), which define their effect and [[Experience & Training|how difficult is to gain the perk]].

## Perk Lists

### Self
```dataview
LIST
FROM #perk/self AND -"_templates"
SORT file.name ASC
```
