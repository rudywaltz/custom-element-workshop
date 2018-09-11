'use strict';

class WcSteps extends HTMLCustomElement {
  init() {
    this._dom = {};
    this._dom.wrapper = document.createElement('div');
    this._dom.wrapper.className = 'e-steps';
    this._dom.progress = document.createElement('div');
    this._dom.progress.className = 'e-steps__progress';
    this._dom.wrapper.appendChild(this._dom.progress);
    this.addEventListener('update', this._updateStep.bind(this));
  }

  connectedCallback() {
    this.appendChild(this._dom.wrapper);
  }

  _updateStep(event) {
    event.stopPropagation();
    const element = document.createElement('a');
    element.className = 'e-steps__item e-steps__item-action';
    element.textContent = event.detail;
    this._dom.progress.appendChild(element);
  }
}

window.customElements.define('wc-steps', WcSteps);
