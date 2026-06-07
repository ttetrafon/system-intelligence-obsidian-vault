---
tags:
  - rules/adventuring
---
## Common Tasks
```dataview
TABLE WITHOUT ID link(file.name) as "Task", time-interval as "Time Interval", TL, ML
FROM #rules/adventuring/task AND -"_templates"
where (ML = 0) AND (TL = 0)
SORT file.name ASC
```

## Magical Tasks
```dataview
TABLE WITHOUT ID link(file.name) as "Task", time-interval as "Time Interval", TL, ML
FROM #rules/adventuring/task AND -"_templates"
where (ML > 0) AND (TL = 0)
SORT ML ASC, file.name ASC
```

## Tech Tasks
```dataview
TABLE WITHOUT ID link(file.name) as "Task", time-interval as "Time Interval", TL, ML
FROM #rules/adventuring/task AND -"_templates"
where (ML = 0) AND (TL > 0)
SORT TL ASC, file.name ASC
```
