'use strict';

class HTMLCustomElement extends HTMLElement {
  constructor(params) {
    const element = super(params);
    element.init();
    return element;
  }

  init() {}
}
