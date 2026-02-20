---
tags:
  - rules/adventuring/domain
---
# Technology Level (TL)
The TL of your equipment describes how advanced they are; the higher the TL, the more advanced an item is. The advancement between technology levels is exponential.

The TL plays a role in how you can use your skills with such advanced technological marvels.
1. ***Primitive Technology***: Bronze age equivalent.
2. ***Classical & Mediaeval Technology***: Iron age equivalent technology. The first glimpses into scientific disciplines, like physics, chemistry, and medicine are being observed.
3. ***Petroleum & Electric Technology***: The industrial revolution, based on natural resources and the production of electricity. The widespread use of electricity marks a new technological era for the civilizations that manage to reach it.
4. ***Fission & Electronics Technology***: The exploitation of nuclear energy and the use of computers. Early space travel begins.
5. ***Light (Laser) Technology***: Miniaturisation of energy sources produce the first held lasers. The first implants appear, but they are still crud.
6. ***Biotechnology***: The first organic machines are developed. Advances in space travel are made thanks to this. Colonisation (generation) ships are sent to other systems for the first time.
7. ***Fusion & Neural Technology (Kardashev I)***: Controlled fusion allows for unlimited energy. Implants that integrate with our neural systems flawlessly have seen the light of the day.
8. ***Plasma (Cold Fusion) & Nanomaterials Technology (Kardashev II)***: Greater understanding of electricity allow for the controlled use of plasma. Living nanomaterials start being produced, while the first true AI makes an appearance.
9. ***Void Technology (Kardashev III)***: Combination of matter and energy into materials with exotic properties allow for advancements only dreamed of before. At this stage, true space exploration begins.
10. ***Mass Effect (Warp) Technology (Kardashev IV)***: Fields can be used for propulsion of projectiles (used as weapons) to whole spaceships, allowing for effective interstellar travel for the first time - although still done in limited distance jumps.
11. **Spacetime Unification (Hyperjump) Technology (Kardashev Ω)**: Almost instantaneous travel across great distances can be achieved. The technological impact of this technology on all sides of life is beyond fantasy and can even surpass magical abilities.
12. ***Meta-Physics***: All knowledge and technology refined in such perfection that anything is possible, as long as it follows the laws of nature.

- [I] Note that the Kardashev scale defines either a technological or a magical level of advancement, at a ML equal to the corresponding TL.

# Technology [[../../Characters/Aspects/Aspects|Aspects]]
The technological aspects are divided by the type of interface one needs to interact (in any way, from using to creating) the technology at hand.
```dataview
LIST
FROM #rules/characters/aspect/technology AND -"_templates"
SORT file.name ASC
```

# Tech Projects
```dataview
TABLE WITHOUT ID link(file.name) as "Project", TL
FROM #rules/adventuring/technology/project AND -"_templates"
SORT TL asc 
```
