## Knowledge

Custom elements can be configured 2 ways, through an attribute and/or a property.

`attributeChangedCallback` runs every time when a watched `attribute` is added, removed or changed. It has 3 parameters:

- name => attribute name
- oldValue => previous value
- newValue => current value

```js
attributeChangedCallback(name, oldValue, newValue) { }
```

- You need to define which attribute would you like to watch.
```js
static get observedAttributes() {
  return ['my-attribute'];
}
```

## Exercise

- Create a setter for label.
- Listen to the "label" attribute change.
- If you don't wanna break the test you created in Step 1, add a default label value.

```html
<wc-steps>
  <wc-steps-step label="Create Content"></wc-steps-step>
</wc-steps>
```

## Helper

- An easy way use component's own setter if an attribute is changed (may you need a hyphen -> camelCase converter):

```js
attributeChangedCallback(name, oldValue, newValue) {
  this[name] = newValue;
}
```
