import { LitElement, html, css } from "lit-element";

import "./irus-map";
import "./irus-tables";
import "./irus-weather";

class IrusContent extends LitElement {
  static get styles() {
    return css`
      header {
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        margin: 0 20%;
        font-size: 30px;
      }

      select {
        width: 100%;
        font-size: 18px;
        padding: 14px 18px;
        border-radius: 4px;
        background-color: white;
        color: black;
        font-family: "Comic Sans MS", cursive, sans-serif;
        margin: 0 -80%;
      }

      main {
        padding: 2rem;
      }

      #time {
        width: 100%;
        font-size: 20px;
        color: white;
        margin: 0 44.5%;
      }

      button {
        background-color: white;
        color: black;
        padding: 12px 22px;
        border: 2px solid black;
        font-family: "Comic Sans MS", cursive, sans-serif;
      }
      button:hover {
        background-color: black;
        color: white;
      }
    `;
  }

  static get properties() {
    return {
      page: { type: String },
      time: { type: String },
    };
  }

  constructor() {
    super();
    this.page = "";
    setInterval(() => {
      this.time = new Date().toLocaleString("ro");
    }, 1000);
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
        <button @click=${this._onGoBack}>Back</button>
      </header>
      <strong id="time">${this.time}</strong>
      <main>
        ${this._pageTemplate}
      </main>
    `;
  }

  _onGoBack(event) {
    event.preventDefault();
    window.location.href = "http://localhost:5050/#";
  }

  _onChangeMenu(event) {
    this.page = event.target.value;
  }

  get _pageTemplate() {
    if (!this.page) {
      return html`<irus-map></irus-map>`;
    }
    if (this.page === "weather") {
      return html`<irus-weather></irus-weather>`;
    }
    if (this.page === "tables") {
      return html`<irus-tables></irus-tables>`;
    }
  }
}

window.customElements.define("irus-content", IrusContent);
