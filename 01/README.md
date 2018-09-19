## Knowledge

- The parent component cannot select child element easily because it does not know when/if gets attached: you can use [mutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)) or you can communicate from child to the parent with a custom event.
- If you choose the second way, the "child" component must be registered later than the parent (otherwise the parent is not initialized as a custom element when the data is coming from child).
- To add more data to the event object, the CustomEvent interface allows you to add details to the `detail` property.

## Exercise

- Create a new component: `wc-steps-step`.
- Fire a CustomEvent after element gets attached to the DOM.
- Send a predefined label for step (e.g. "Step 1").
- Use event data in parent component to generate your first step in steps.
  - Create an `a` tag with `e-steps__item e-steps__item-action` classes.
  - Text content should come from child element.

```html
<div class="e-steps">
  <div class="e-steps__progress">
    <a class="e-steps__item e-steps__item-action">{label}</a>
  </div>
</div>
```

## Helper

- To dispatch custom event (bubbling is false by default)
```js
const customEvent = new CustomEvent('update', {
      bubbles: true,
      detail: 'Step 1'
    });
this.dispatchEvent(customEvent);
```

- Test
```js
    const eventSpy = sinon.spy();
    eventSpy.getCall(0).args[0].detail
```


# Links
- [mutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
- [Custom Event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
