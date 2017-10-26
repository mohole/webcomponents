'use strict';

class BasicElement extends HTMLElement {

  constructor(){
    super();

    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    console.log('<basic-element> INIT');

    this.shadow.innerHTML = `
      <style>
        section{
          border: 1px solid #ddd;
          padding: 5px 15px;
          margin: 15px 0;
          font-family: Helvetica, Arial, sans;
        }
      </style>
      <section>
        <h3>Basic Element</h3>
        <slot></slot>
      </section>
    `;
  }

}

customElements.define('basic-element', BasicElement);