
class ComingSoonPage extends HTMLElement {
    constructor() {
        super()

        this.innerHTML = `
            <div class="coming-soon-container">
                <h1>Coming Soon</h1>
                <p>We're working hard to bring you this content. Stay tuned!</p>
            </div>
        `
    }
}

customElements.define('coming-soon-page', ComingSoonPage);

  