class IndicatorLoading extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `

            .loading-container {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                align-content: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 9999;
            }
            
            .loading-anim {
                width: 15px;
                border-radius: 50%;
                aspect-ratio: 1;
                animation: l5 1s infinite linear alternate;
                z-index: 9999;
            }

            @keyframes l5 {
                0%  {box-shadow: 20px 0 #fff, -20px 0 #0002;background: #fff; z-index: 9999;}
                33% {box-shadow: 20px 0 #fff, -20px 0 #0002;background: #0002}
                66% {box-shadow: 20px 0 #0002,-20px 0 #fff; background: #0002}
                100%{box-shadow: 20px 0 #0002,-20px 0 #fff;     background: #fff }
            }
        `;
    }

    render() {
        this.updateStyle();

        this._shadowRoot.innerHTML += `
            ${this._style.outerHTML}

            <div class='loading-container'>
                <div class='loading-anim'></div>
            </div>
        `;
    }

    showLoading() {
        this._shadowRoot.querySelector('.loading-container').style.display =
            'grid';
    }

    hideLoading() {
        this._shadowRoot.querySelector('.loading-container').style.display =
            'none';
    }
}

customElements.define('indicator-loading', IndicatorLoading);
