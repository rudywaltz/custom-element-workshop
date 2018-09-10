## Knowledge
Attribute with boolean value has multiple valid version.

This element disabled:
```html
<element disabled="disabled"></element>
<element disabled="true"></element>
<element disabled></element>
```

This element enabled if value false or attribute removed. If attribute removed `attributeChangeCallback` get null as a newValue.
```html
<element disabled="false"></element>
<element></element>
```


## Exercise
- create disable version of step, must not trigger event


## Helper

```js
const convertAttributeToBoolen = value =>
  value !== undefined && value !== null && value !== false && value !== 'false';
```
