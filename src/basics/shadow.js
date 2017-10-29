'use strict';

class ShadowElement extends HTMLElement {

  constructor(){
    super();

    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    console.log('<shadow-element> INIT');

    this.shadow.innerHTML = `
      <style>
        section.shadow{
          border: 1px solid #ddd;
          padding: 5px 15px;
          margin: 15px 0;
          font-family: Helvetica, Arial, sans;
        }
      </style>
      <section class="shadow">
        <h3>Shadow Element</h3>
        <slot></slot>
      </section>
    `;
  }

}

customElements.define('shadow-element', ShadowElement);