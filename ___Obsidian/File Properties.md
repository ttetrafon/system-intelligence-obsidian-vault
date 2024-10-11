# Front Matter
Can create a yaml section at the beginning of a note to define various metadata and properties (*file properties*).
```
---
Key: Value
---
```

## Tags
- Tags are key-value pairs that define metadata for the note.
- Values can be strings or lists.
```
list1: [alpha, beta, gamma]
list2:
	- alpha
	- beta
	- gamma
tags: Tag1, Tag2, Tag3
```
- Tags can also be used inline, by prepending them with # (example #this_is_a_tag).
- A list of all tags can be viewed on the side-panel, under the `tags` tab.
- Tags can also be used in search, with `tag: search_term`.

### Alias
- An alias is a specific metadata.
```
alias: alias1, alias2
```
- Aliases are used as alternate note names for all intends and purposes.

## Dataview
- With the use of the [[Plugins.md#^81a69e|Dataview plugin]], tags can be used to perform advanced operations, like automatically creating lists and tables, populating values, performing calculations, and so on.
