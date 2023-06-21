import { LitElement, html } from "lit";

import './css/progressbar.css'

export class ProgressBar extends LitElement {
    createRenderRoot() {
        return this
    }

    firstUpdated() {
        const progressbar = this.querySelector('#progressbar');
        progressbar.style.transformOrigin = '0% 50%';

        progressbar.animate({
            transform: ['scaleX(0)', 'scaleX(1)'],
        }, {
            fill: 'forwards',
            timeline: new ScrollTimeline({
                source: document.documentElement,
            })
        })
    }

    render() {
        return html`
        <div id="progressbar"></div>
        <section class="song">
        <h1>The Webberman</h1>
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