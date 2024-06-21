class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero__desc">
                    <h1 class="hero__title">Selamat datang di Rate Resto</h1>
                    <p class="hero__tagline">Kenalilah restoran-restorannya sebelum anda berkunjung!</p>
                </div>
            </div>
          `;
    }
}

customElements.define("app-hero", Hero);