```meta-bind-js-view
{property} as property
---
let res = `
{context.bound.property}
`
return engine.markdown.create(res);
```