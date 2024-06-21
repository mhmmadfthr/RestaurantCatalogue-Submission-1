class headerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <a class="logo" href="" alt="logo">
                <i class="fa fa-utensils"></i>
                <p class="name">Rate Resto</p>
            </a>
            <nav>
                <ul id="navigation" class="nav-list">
                    <li><a id="content-btn">Content</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://github.com/mhmmadfthr/">About Us</a></li>
                </ul>
            </nav>
            <button type="button" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>
        `;
    }
}

customElements.define("app-header", headerBar);