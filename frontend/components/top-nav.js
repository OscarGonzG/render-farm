class TopNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    position: relative;
                    background-color: var(--primary-bg);
                    height: var(--top-nav-height);
                    display: flex;
                    justify-content: space-between;
                    padding-inline: 24px;
                    align-items: center;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
                    z-index: 100;
                }

                h1 {
                    color: black;
                    margin: 0;
                }
            </style>
            <nav class="top-nav">
                <h1>RenderFarm</h1>
            </nav>
        `;
    }
}

customElements.define('top-nav', TopNav);