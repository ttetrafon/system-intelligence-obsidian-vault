---
tags:
  - reference
---
```js-engine
let table = "| skill level | impossible success (6) | critical success (5) | extreme success (4) | hard success (3) | difficult success (2) | regular success (1) | fumble (-3) |\n";
table += "|:-----------:|:----------------------:|:--------------------:|:-------------------:|:----------------:|:---------------------:|:-------------------:|:-----------:|\n";
for (let i = 1; i <= 200; i++) {
	let impossible = Math.floor(i / 50);
	let critical = Math.floor(i / 10);
	let extreme = Math.floor(i / 4);
	let hard = Math.floor(i / 2);
	let difficult = Math.floor(i * 3 / 4);
	let fumble = Math.min(90 + critical, 100);
	table += `| ${i} | ${impossible} | ${critical} | ${extreme} | ${hard} | ${difficult} | ${i} | ${fumble} |\n`
}

return engine.markdown.create(table);
```
