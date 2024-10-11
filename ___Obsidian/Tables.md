---
NoteType: Obsidian
---
- Obsidian supports the creation of tables, ascii like.
- With [[Plugins.md#^85d8cd|advance tables]], you have more control in source code.
	- Besides styling, can also [add formulas](https://github.com/tgrosinger/md-advanced-tables/blob/main/docs/formulas.md) in the table.
- Use `Ctrl + Shift + D` to open the advanced tables side-panel.

| Column 1 | Column 2 |
|:--------:|:--------:|
| Value 1  | Value 2  |
- Formulas can be added after a table.
- Formulas do not run automatically, they need to be evaluated through the side-panel.

| Start | Middle | End | Total | Average |
|:-----:| ------ | --- | ----- | ------- |
|   1   | 5      | 3   | 9     | 3       |
<!-- TBLFM: $4=sum($1..$3) -->
<!-- TBLFM: $5=($4/3) -->

