# Basic

## Knowledge

Every HTML element a copy of HTMLElement class

```
  <button> -> HTMLButtonElement -> HTMLElement (base class)
```

The Custom element associate a tag with class


```js
class wcSteps extends HTMLElement {}
```

They must contains dash own name (prevent overwrite native element)
You need regist your component as a custom element.

```js
window.customElements.define('wc-steps', wcSteps);
```
```html
<wc-steps></wc-steps>
```

- Webcomponent have some lifecycle callback.

- Constructor run if element create (`document.createElement('wc-steps');`) or when the browser engine founded in DOM Tree.
- You need call super in first place of costurctor (for a correct prototype chain);

In the constructor You can add eventListener to element, create element.
But can't reach the DOM element, cannot append child element, cannot read own attribute cannot see the child element.


```js

class wcSteps extends HTMLElement {
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

- `connectedCallback` fired after browser engine read the component or element attached to the DOM

```js
  connectedCallback() {}

```

### Polyfill
Work nativly in Chrome and Firefox (63+). [document-register-element](https://github.com/WebReflection/document-register-element) is small libary (around 5KB minified and gzipped) for the rest.

### Test fremawork
web-component-tester originally made for a Polymer, but you can use the native component well. It works with in browser, cli and selenium grids. You can write your test as usual with Mocha, Chai and Sinon. You can sea the first test in steps.spec.js, and you can check in your [browser](http:localhost:8000/00/index.spec.html)

## Exercise

### Made your first the test green:
- create you first custom element (extent the preparated `htmlCustomElement`)
- Build the basic html structure inside the component

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

class wcSteps extends HTMLCustomElement {
  init() {
    this._state = {}
  }
}

```

## Links
- [web-component-tester](https://github.com/Polymer/tools/tree/master/packages/web-component-tester)
- [document-register-element](https://github.com/WebReflection/document-register-element)
