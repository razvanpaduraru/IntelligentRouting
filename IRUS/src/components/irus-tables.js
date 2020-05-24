import { LitElement, html, css } from "lit-element";

import "./irus-table1";
import "./irus-table2";
import "./irus-table3";

class IrusTables extends LitElement {
  static get styles() {
    return css`
      select {
        font-size: 18px;
        padding: 16px 20px;
        border-radius: 4px;
        background-color: white;
        color: black;
        font-family: "Comic Sans MS", cursive, sans-serif;
      }

      strong {
        color: white;
        font-size: 30px;
      }

      section {
        display: flex;
        justify-content: space-between;
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
    this.page = "Table1";
  }

  render() {
    return html`
      <section>
        <strong>Table informations</strong>
        <nav>
          <select @change=${this._onChangeMenu} name="Table Type">
            <option ?selected=${this.page === "Table1"} value="Table1"
              >Sunrise and Sunset Algorithm at height H</option
            >
            <option ?selected=${this.page === "Table2"} value="Table2"
              >Civil Twilight Algorithm</option
            >
            <option ?selected=${this.page === "Table3"} value="Table3"
              >Azimuth and Altitude (zenithal distance)</option
            >
          </select>
        </nav>
      </section>

      <main>
        ${this._pageTemplate}
      </main>
    `;
  }

  _onChangeMenu(event) {
    this.page = event.target.value;
  }

  get _pageTemplate() {
    if (this.page === "Table1") {
      return html`<irus-table-one></irus-table-one>`;
    }
    if (this.page === "Table2") {
      return html`<irus-table-two></irus-table-two>`;
    }
    if (this.page === "Table3") {
      return html`<irus-table-three></irus-table-three>`;
    }
  }
}

window.customElements.define("irus-tables", IrusTables);
