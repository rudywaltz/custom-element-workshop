'use strict';

class wcSteps extends HTMLCustomElement {
  init() {
    this._state = {};
    this._state.steps = [];
    this._events = {};
    this._events.deleteStep = this._deleteStep.bind(this);
    this._events.updateStep = this._updateStep.bind(this);
    this._dom = {};
    this._dom.wrapper = document.createElement('div');
    this._dom.wrapper.className = 'e-steps';
    this._stepsTemplate = hyperHTML.bind(this._dom.wrapper);
    this.addEventListener('update', this._events.updateStep);
    this.addEventListener('delete', console.log);
  }

  connectedCallback() {
    this.appendChild(this._dom.wrapper);
    this._render();
  }

  _updateStep(event) {
    event.stopPropagation();
    const component = event.detail.component;
    component.removeEventListener('delete', this._events.deleteStep);
    component.addEventListener('delete', this._events.deleteStep);
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

  _deleteStep() {
    this._state.steps = this._state.steps.filter(step => step.uuid !== event.detail.uuid);
    this._render();
  }


  _stepWire(step) {
    const stepClasses = ['e-steps__item', 'e-steps__item-action'];
    if(step.disabled) {
      stepClasses.push('e-steps__item-disabled');
    }

    const click = () => {
      if(step.disabled) {
        return;
      }
      step.component.dispatchEvent(new CustomEvent('trigger'));
    }

    return hyperHTML.wire(step,  ':step')`
      <div class="${stepClasses.join(' ')}" onClick=${click}>${step.label}</div>
    `;
  }

  _render() {
    this._stepsTemplate`
      <div class="e-steps__progress">
        ${this._state.steps.map(step => this._stepWire(step))}
      </div>
    `;
  }
}

window.customElements.define('wc-steps', wcSteps);
