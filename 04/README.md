## Knowledge

### Cleanup

`disconnectedCallback` runs after the component gets detached from the DOM (bubbling is not working, the parent element cannot catch the event).

Usually we use this callback for a cleanups.

```js
  disconnectedCallback() {}
```

### Interaction
If you want to make an interactive component, you must fire an event if something is happened. You have two main options. You fire all your events on your parent component and communicate what happend (like event name and detail).

```js
new CustomEvent('clicked', {
      detail: {
        label: 'step 1',
        data: { },
      }
    });

new CustomEvent('rendered');

etc.
```

Or you can fire event directly on component:

```js
const customEvent = new CustomEvent('trigger', {
      bubbles: true,
      detail: {
        data: { },
      }
    });
```
The second version better for an "atomic level concept".

<img src="../img/events.png" width="400px">

## Exercise

- Removing ```step``` component should also remove the step element from the DOM.
- Dispatch a ```trigger``` event on ```step``` component if the correct DOM element has been clicked.
