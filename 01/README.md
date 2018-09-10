## Knowledge
- The parent component can't select child element easy because you don't know when arrive (you can use [mutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)) or you can communicate from child to parent with customEvent.
- If you choose the secound way, the "child" component must regist later than parent (otherwise the parent is not ready as a webcomponent when data bubbling from child)
- To add more data to the event object, the CustomEvent interface exists and the detail property can be used to pass custom data.

## Exercise

- create new component `wc-steps-step`
- fire customEvent after element attached to the DOM.
- send predefined label for Step (e.g. "Step 1")
- use event data in parent component generate Your first step in steps.
  - create  `a` tag with `e-steps__item e-steps__item-action` classes
  - element text content come from child elemenet

```html
<wc-steps>
  <div class="e-steps">
    <div class="e-steps__progress">
      <a class="e-steps__item e-steps__item-action">{label}</a>
    </div>
  </div>
</wc-steps>
```



## Helper

- dispatch custom event (bubbles false by default)
```js
var customEvent = new CustomEvent('update', {
      bubbles: true,
      detail: 'Step 1'
    });
this.dispatchEvent(customEvent);
```

- test
```js
    var eventSpy = sinon.spy();
    eventSpy.getCall(0).args[0].detail
```


# Links
- [mutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
- [Custom Event](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
