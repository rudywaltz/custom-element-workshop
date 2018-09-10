'use strict';

class wcStep extends HTMLCustomElement {
  init() {
    this._label = 'Step 1';
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
    this._label = value;
    this._dispatchEvent();
  }

  _dispatchEvent() {
    this.dispatchEvent(new CustomEvent('update', {
      bubbles: true,
      detail: this._label
    }));
  }

}

window.customElements.define('wc-steps-step', wcStep);
