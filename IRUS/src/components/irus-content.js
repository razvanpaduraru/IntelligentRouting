import { LitElement, html, css } from "lit-element";

import "./irus-map";
import "./irus-tables";

class IrusContent extends LitElement {
  static get styles() {
    return css`
      header {
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        margin: 0 30%;
        font-size: 30px;
      }

      select {
        width: 100%;
        font-size: 18px;
        padding: 16px 20px;
        border-radius: 4px;
        background-color: white;
        color: black;
        font-family: "Comic Sans MS", cursive, sans-serif;
      }

      main {
        padding: 2rem;
      }
    `;
  }

  static get properties() {
    return {
      page: { type: String },
    };
  }

  constructor() {
    super();
    this.page = "";
  }

  render() {
    return html`
      <header>
        <strong>Route informations</strong>
        <nav>
          <select @change=${this._onChangeMenu} name="Information Type">
            <option value="">Map</option>
            <option ?selected=${this.page === "weather"} value="weather"
              >Weather</option
            >
            <option ?selected=${this.page === "tables"} value="tables"
              >Tables</option
            >
          </select>
        </nav>
      </header>

      <main>
        ${this._pageTemplate}
      </main>
    `;
  }

  _onChangeMenu(event) {
    this.page = event.target.value;
  }

  get _pageTemplate() {
    if (!this.page) {
      return html`<irus-map></irus-map>`;
    }
    if (this.page === "weather") {
      return html`Weather`;
    }
    if (this.page === "tables") {
      return html`<irus-tables></irus-tables>`;
    }
  }
}

window.customElements.define("irus-content", IrusContent);
