---
other_bind_target: res = 0
---
```meta-bind-js-view
{bind_target_1} as var1
{bind_target_2} as var2
save to {other_bind_target}
---
return `res = ${context.bound.var1 * context.bound.var2}`;
```