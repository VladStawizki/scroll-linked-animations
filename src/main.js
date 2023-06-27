import { LitElement, html } from 'lit'

import { ProgressBar } from './progressbar'
import { Parallax } from './parallax'
import { Home } from './home'

import './css/style.css'


class App extends LitElement {
  constructor() {
    super()
    this.pathname = location.pathname
  }

  createRenderRoot() {
    return this;
  }

  render() {
    console.log(this.pathname);
    switch (this.pathname) {
      case '/':
        return html`<my-home></my-home>`;
      case '/progressbar':
        return html`<my-progressbar></my-progressbar>`;
      case '/parallax':
        return html`<my-parallax></my-parallax>`;
      default:
        return html`<h1>oO 404</h1>`
    }
  }
}

customElements.define('my-app', App);
customElements.define('my-progressbar', ProgressBar);
customElements.define('my-parallax', Parallax);
customElements.define('my-home', Home);