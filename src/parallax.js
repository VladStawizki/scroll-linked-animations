import { LitElement, html } from "lit"

import './css/parallax.css'

export class Parallax extends LitElement {
    createRenderRoot() {
        return this
    }

    // firstUpdated() {
    //     const timeline = new ScrollTimeline({
    //         source: document.documentElement,
    //     });

    //     const firstElement = this.querySelector('.hero__body img');

    //     firstElement.animate({
    //         transform: ['translateY(-5%)', 'translateY(-200%)'],
    //     }, {
    //         fill: 'forwards',
    //         timeline: timeline
    //     })

    //     const secondElement = this.querySelector('.hero__header');

    //     secondElement.animate({
    //         transform: ['translateY(150px)', 'translateY(1000px)'],
    //     }, {
    //         fill: 'forwards',
    //         timeline: timeline
    //     })
    // }
    
    render() {
        return html`
        <section class="hero">
            <div class="hero__body">
                <img src="/hero.jpg" width="1200"/>
                <div class="hero__header">
                    <h1><span>The Webberman</span></h1>
                </div>
            <div>
        </section>
        <section class="song song-paralax">
        <section>
            <p>There once was a place</p>
            <p>to run your code</p>
            <p></p>
            <p>In us-east-I</p>
            <p>on containerised Node</p>
            <p></p>
            <p>Requests came in,</p>
            <p>replies were bestowed</p>
            <p></p>
            <p>From the lambda far away</p>
        </section>
        <section>
            <p>Soon may the</p>
            <p>server respond</p>
            <p></p>
            <p>To bring us markup</p>
            <p>to look upon</p>
            <p></p>
            <p>One day when the</p>
            <p>JavaScript runs</p>
            <p></p>
            <p>We'll take our page and go</p>
        </section>
        <section>
            <p>The cold starts held</p>
            <p>the data back</p>
            <p></p>
            <p>Till the Dane said</p>
            <p>you should use JamStack</p>
            <p></p>
            <p>It sounded good</p>
            <p>so we gave it a crack</p>
            <p></p>
            <p>For a while anyway</p>
        </section>
        <section>
            <p>Soon may the</p>
            <p>server respond</p>
            <p></p>
            <p>To bring us markup</p>
            <p>to look upon</p>
            <p></p>
            <p>One day when the</p>
            <p>JavaScript runs</p>
            <p></p>
            <p>We'll take our page and go</p>
        </section>
        <section>
            <p>Static files are great,</p>
            <p>unless</p>
            <p></p>
            <p>You need something</p>
            <p>from the database</p>
            <p></p>
            <p>Then you'll need</p>
            <p>to make a request</p>
            <p></p>
            <p>To chase the spinners away</p>
        </section>
        <section>
            <p>Soon may the</p>
            <p>server respond</p>
            <p></p>
            <p>To bring us markup</p>
            <p>to look upon</p>
            <p></p>
            <p>One day when the</p>
            <p>JavaScript runs</p>
            <p></p>
            <p>We'll take our page and go</p>
        </section>
        <section>
            <p>If you don't want to</p>
            <p>feetch() your data late</p>
            <p></p>
            <p>Just render your page</p>
            <p>inside V8</p>
            <p></p>
            <p>Life on the edge is</p>
            <p>pretty great</p>
            <p></p>
            <p>Friends, this is the way</p>
        </section>
        <section>
            <p>Soon may the</p>
            <p>server respond</p>
            <p></p>
            <p>To bring us markup</p>
            <p>to look upon</p>
            <p></p>
            <p>One day when the</p>
            <p>JavaScript runs</p>
            <p></p>
            <p>We'll take our page and go</p>
        </section>
        <section>
            <p>Soon may the</p>
            <p>server respond</p>
            <p></p>
            <p>To bring us markup</p>
            <p>to look upon</p>
            <p></p>
            <p>One day when the</p>
            <p>JavaScript runs</p>
            <p></p>
            <p>We'll take our page and go</p>
        </section>
        <section>
            <p>Soon may the</p>
            <p>server respond</p>
            <p></p>
            <p>To bring us markup</p>
            <p>to look upon</p>
            <p></p>
            <p>One day when the</p>
            <p>JavaScript runs</p>
            <p></p>
            <p>We'll take our page and go</p>
        </section>
        </section>
        `
    }
}