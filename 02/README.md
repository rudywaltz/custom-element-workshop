## Knowledge
Custom element can always configurate 2 ways from outside, attribute and property.
`attributeChangedCallback` run every time when watched `attribute` added, removed or changed. It has 3 parameter:
- name => attribute name
- oldValue => previus value
- newValue => currrent value

```js
attributeChangedCallback(name, oldValue, newValue) { }
```

- You need define which attributes would you like to watch.
```js
static get observedAttributes() {
  return ['my-attribute'];
}
```


## Exercise

- Create a setter for label
- Listen the "label" attribute change
- If you don't wanna break old test made Step 1 as default label value.

```html
<wc-steps>
  <wc-steps-step label="Create Content"></wc-steps-step>
</wc-steps>
```


## Helper

- easy way use component own setter if attribute changed (may you need a hyphen -> camelCase converter)

```js
attributeChangedCallback(name, oldValue, newValue) {
  this[name] = newValue;
}
```
