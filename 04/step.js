'use strict';

const uuid = placeholder => {
  if (placeholder) {
    return (placeholder ^ Math.random() * 16 >> placeholder / 4).toString(16);
  } else {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
  }
};

class wcStep extends HTMLCustomElement {
  init() {
    this._state = {};
    this._state.uuid = uuid();
    this._state.label = 'Step 1';
  }

  connectedCallback() {
    this._dispatchEvent();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  static get observedAttributes() {
    return ['label'];
  }

  set label(value) {
    this._state.label = value;
    this._dispatchEvent();
  }

  _dispatchEvent() {
    this.dispatchEvent(new CustomEvent('update', {
      bubbles: true,
      detail: this._state
    }));
  }
}

window.customElements.define('wc-steps-step', wcStep);
