# Basic

## Knowledge

The `customElements` global is used for defining a custom element and teaching the browser about a new tag. Call `customElements.define()` with the tag name you want to create and a JavaScript class that extends the base `HTMLElement`.

Every HTML element extends the HTMLElement class:

```
  <button> -> HTMLButtonElement -> HTMLElement (base class)
```

```js
class WcSteps extends HTMLElement {}
```

The name of a custom element must contain a dash (so the browser's parser can distinguish custom elements from regular elements).
Registering a custom element:

```js
window.customElements.define('wc-steps', WcSteps);
```

```html
<wc-steps></wc-steps>
```

- Custom elements have lifecycle callbacks.

- Constructor runs if an instance of the element is created (`document.createElement('wc-steps');`) or when the browser's parser founds in the DOM.

- `super()` must be called in the constructor. (sidenote: you don't need do this if you use higher version than `1.1.1` from `polyfill` and `Babel7` )

In the constructor you can add events listeners, initialize states, or define any other basic setup for the custom element.
You cannot reach the DOM, or append a child element, you cannot read the attributes of the custom element and cannot see the child elements.

```js

class WcSteps extends HTMLElement {
  constructor() {
    super();
  }
}
```

```html
<div>
  <h1>Amazing Example</h1>
  <wc-steps></wc-steps>
</div>
```

- `connectedCallback` fires after browser's parser founds the custom element or the element attaches to the DOM.

```js
  connectedCallback() {}

```

### Polyfill
Custom Elements work natively in Chrome, Safari and Firefox (63+). [document-register-element](https://github.com/WebReflection/document-register-element) is small libary (around 5KB minified and gzipped) for the older browsers (IE9+).

### Testing
`web-component-tester` is originally made for the Polymer framework, but it can be used for custom elements as well. You can run your tests in your browser of choice, from CLI or on a Selenium Grid. You can write your tests with Mocha, Chai and Sinon. You can see the first test in steps.spec.js, and you can check it in your [browser](http:localhost:8000/00/index.spec.html).

## Exercise

### Make your first the test green:
- Create you first custom element (extent the prepared `HTMLCustomElement`).
- Build the basic HTML structure inside the component.

```html
<div class="e-steps">
  <div class="e-steps__progress">
  </div>
</div>
```

## Helper

- html-custom-element
```js
class HTMLCustomElement extends HTMLElement {
  constructor(params) {
    const element = super(params);
    element.init();
    return element;
  }

  init() {}
}

class WcSteps extends HTMLCustomElement {
  init() {
    this._state = {}
  }
}

```

## Links
- [web-component-tester](https://github.com/Polymer/tools/tree/master/packages/web-component-tester)
- [document-register-element](https://github.com/WebReflection/document-register-element)
