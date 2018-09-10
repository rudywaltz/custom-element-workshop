'use strict';

class wcSteps extends HTMLCustomElement {
  init() {
    this._dom = {};
    this._dom.wrapper = document.createElement('div');
    this._dom.wrapper.className = 'e-steps';
    this._dom.progress = document.createElement('div');
    this._dom.progress.className = 'e-steps__progress';
    this._dom.wrapper.appendChild(this._dom.progress);
  }

  connectedCallback() {
    this.appendChild(this._dom.wrapper);
  }
}

window.customElements.define('wc-steps', wcSteps);
