---
tags:
  - rules
---


```dataview
TABLE WITHOUT ID link(file.name) as "Size", value as "Value", dimensions as "Dismensions", weight as "Weight", bulk as "Bulk", example as "Examples"
FROM #size AND -"_templates"
SORT value ASC
```
