## Knowledge

A boolean attribute has multiple valid versions.

This element is disabled:

```html
<element disabled="disabled"></element>
<element disabled="true"></element>
<element disabled></element>
```

This element is enabled if value is set to false or the attribute gets removed. If the attribute gets removed `attributeChangeCallback` gets null as a newValue.

```html
<element disabled="false"></element>
<element></element>
```

## Exercise
- Create a disabled version of step, clicking the step should not trigger an event.

```html
<a class="e-steps__item e-steps__item-action e-steps__item-disabled">{label}</a>
```

## Helper

```js
const convertAttributeToBoolen = value =>
  value !== undefined && value !== null && value !== false && value !== 'false';
```

## Tips
In Internet Explorer, disabled elements do not respond to mouse events. If you use custom-element as a wrapper, or you build the design inside the custom element, you must intruduce a new name for this attribute like `wc-disabled`.
[Disabled attribute in Explorer](https://msdn.microsoft.com/en-us/ie/ms533732(v=vs.94))
