```dataview
TABLE WITHOUT ID link(file.name) as "Name", Player, hp, AC
FROM "../../PCs/PCs"
where (Role = "Player") AND (Status = "Active")
```