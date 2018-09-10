## Knowledge
In previous example we not update the current step, always attach as a copy from the result. To prevent this, must store child component data in parent and upsert the list.

## Exercise
- add ```uuid``` for step component
- upsert step in ```steps``` component
-  Make sure not leave any unnecessary DOM element after render


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
