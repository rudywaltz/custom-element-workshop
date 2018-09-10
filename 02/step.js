'use strict';

class wcStep extends HTMLCustomElement {
  init() {
  }

  connectedCallback() {
    this.dispatchEvent(new CustomEvent('update', {
      bubbles: true,
      detail: 'Step 1'
    }));
  }

}

window.customElements.define('wc-steps-step', wcStep);
