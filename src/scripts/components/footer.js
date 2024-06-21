class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="footer-element" class="footer-element">
                <p>mhmmadfthr &#169;  Rate Restoo</p>
            </div>
        `;
    }
}

customElements.define("app-footer", footerBar);