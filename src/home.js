import { LitElement, html } from "lit";

import './css/home.css'

export class Home extends LitElement {
    createRenderRoot() {
        return this
    }

    render() {
       return html`<section class="home">
        <a class="home-card" href="/progressbar">
            <h2>Progress Bar</h2>
        </a>
        <a class="home-card" href="/parallax">
            <h2>Parallax</h2>
        </a>
       <section>`;
    }
}