# Bonus

## Knowledge

hyperHTML a a lightweight virtual DOM alternative. We use it to simplify the rendering of our components: it allows us to re-render only the part is needed when something is changed in the rendering parameters. You can write clean templates with hyperHTML.

hyperHTML has two main functions: `bind` and `wire`.

### bind

It allows to bind a template to a DOM node.

### wire

Wire returns the element or list of elements. You can use multiple wires in the template. If you add namespace to the wire and a parameter, the wire updates only when the watched parameter is changed.

Both use "tagged templates" function.

## Exercise

Build a DOM diffed version of the component.

## Helper

```html
  <script src="./../node_modules/hyperhtml/min.js"></script>
```

- One example

```js
const buttons = [{name: 'primary', disabled: false}, {name: 'secondary', disabled: true}];
const hoverEvent = event => console.log(event);
const wrapper = document.createElement('div');
const myTemplate = hyperHTML.bind(wrapper);
document.body.appendChild(wrapper);
```
```js
const buttonWire = button => {
  const classes = `button ${button.disabled ? 'button-disabled' : ''}`;
  return hyperHTML.wire(button, ':button')`
        <div onmouseenter=${hoverEvent} class="${classes}">${button.name}</div>`
}
```
```js
myTemplate`
  <div class="wrapper">
    <h1>Awesome Button list</h1>
    ${buttons.map(button => buttonWire(button))}
  </div>`;
```

## Links
- [HyperHTML](https://github.com/WebReflection/hyperHTML)
- [Tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)
