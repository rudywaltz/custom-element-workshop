'use strict';

class WcSteps extends HTMLCustomElement {
  init() {
    this._state = {};
    this._state.steps = [];
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
    this._render();
  }

  _updateStep(event) {
    event.stopPropagation();
    this._upsertStep(event.detail);
    this._render();
  }

  _upsertStep(itemData) {
    const item = this._getItemByUuid(itemData.uuid);
    const index = this._state.steps.indexOf(item);

    if (index > -1) {
      this._state.steps[index] = itemData;

    } else {
      this._state.steps.push(itemData);
    }
  }

  _getItemByUuid(uuid) {
    return this._state.steps.filter(item => item.uuid === uuid)[0];
  }

  _render() {
    this._dom.progress.innerHTML = '';
    this._state.steps.forEach(step => {
      const stepElement = document.createElement('a');
      stepElement.className = 'e-steps__item e-steps__item-action';
      stepElement.textContent = step.label;
      this._dom.progress.appendChild(stepElement);
    });
  }
}

window.customElements.define('wc-steps', WcSteps);
