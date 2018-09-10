'use strict';

const uuid = placeholder => {
  if (placeholder) {
    return (placeholder ^ Math.random() * 16 >> placeholder / 4).toString(16);
  } else {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
  }
};

const convertAttributeToBoolen = value =>
  value !== undefined && value !== null && value !== false && value !== 'false';

class wcStep extends HTMLCustomElement {
  init() {
    this._state = {};
    this._state.uuid = uuid();
    this._state.label = 'Step 1';
    this._state.component = this;
    this._state.disabled = false;
  }

  connectedCallback() {
    this._dispatchEvent();
  }

  disconnectedCallback() {
    this.dispatchEvent(new CustomEvent('delete', {
      detail: this._state
    }));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  static get observedAttributes() {
    return ['label', 'disabled'];
  }

  set label(value) {
    this._state.label = value;
    this._dispatchEvent();
  }

  set disabled(value) {
    this._state.disabled = convertAttributeToBoolen(value);
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
