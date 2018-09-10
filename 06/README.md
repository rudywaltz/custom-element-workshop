# Bonus

## Knowledge
HyperHTML a lightweight virtual dom helper. It made a DOM Diff so not render whole desgign if something changed inside the component. You can write with HyperHTML clean template easy way.

Is has two main function bind and wire.

### bind
Bind hyperHTML to a generic DOM container. Function returns with new content.

### wire
Wire return the element or list of elements. You can use multiple wire in the template. If you add namespace to wire, and watching parameter, the wire run only if the watched parameter is changed.


Both use "tagged templates" function.

## Exercise

build DOM diff version from component

## Helper

```html
  <script src="./../node_modules/hyperhtml/min.js"></script>
```


- one example

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
