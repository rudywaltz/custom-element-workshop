## Knowledge

In the previous example we did not update the current step, we attached a copy from the result. To prevent this behavior, we must store the child component's data in parent and upsert the list.

## Exercise
- Add ```uuid``` for step component.
- Upsert step in ```steps``` component.
- Make sure not to leave any unnecessary DOM element(s) after render.

## Helper

```js
const uuid = placeholder => {
  if (placeholder) {
    return (placeholder ^ Math.random() * 16 >> placeholder / 4).toString(16);
  } else {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
  }
};
```
