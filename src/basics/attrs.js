'use strict';

class CustomAttributes extends HTMLElement {

  constructor(){
    super();

    this.shadow = this.attachShadow({mode: 'open'});
  }

  render(){
    const word = this.getAttribute('word') || 'cool';

    this.shadow.innerHTML = `
      <p>Custom attributes are ${word}</p>
    `;
  }

  connectedCallback(){
    console.log('<custom-attributes> INIT');
    this.render();
  }

}

customElements.define('custom-attributes', CustomAttributes);