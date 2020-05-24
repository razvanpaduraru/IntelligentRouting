import { LitElement, html, css } from "lit-element";

import "./irus-content";
import "./irus-form";

class IrusMain extends LitElement {
  static get properties() {
    return {
      page: { type: String },
    };
  }

  constructor() {
    super();
    this.page = window.location.hash.substring(1);
    window.onhashchange = this._onHashChange.bind(this);
  }

  render() {
    return html` ${this._pageTemplate} `;
  }

  _onHashChange(event) {
    const hash = new URL(event.newURL).hash;
    this.page = hash.substring(1);
  }

  get _pageTemplate() {
    if (this.page === "") {
      return html`<irus-form
        @navigate-pressed=${this._onNavigatePressed}
      ></irus-form>`;
    }
    if (this.page === "content") {
      return html`<irus-content></irus-content>`;
    }
  }

  _onNavigatePressed(event) {
    event.preventDefault();
    window.location.hash = "content";
  }
}

window.customElements.define("irus-main", IrusMain);
