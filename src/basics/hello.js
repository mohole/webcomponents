'use strict';

class HelloElement extends HTMLElement {

  connectedCallback(){
    console.log('<hello-element> INIT');

    this.innerHTML = `
      <section class="panel">
        <h3>Simple element</h3>
        <p>like an hello world...</p>
      </section>
    `;

    this.querySelector('.panel').addEventListener('click', (evt) => {
      const id = this.getAttribute('id') || '';
      console.log(`<hello-element> ${id} CLICKED`);
    });
  }

}

customElements.define('hello-element', HelloElement);