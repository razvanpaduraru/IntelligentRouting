import { LitElement, html, css } from "lit-element";

class IrusMap extends LitElement {
  static get styles() {
    return css`
      div {
        display: flex;
        flex-wrap: wrap;
        border-radius: 5px;
        background: #7f7f7f;
        background: rgba(0, 0, 0, 0.8);
        padding: 20px;
        width: fit-content;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 0 30%;
      }
      strong {
        color: white;
        font-size: 30px;
      }

      legend {
        color: white;
        width: fit-content;
        padding: 8px;
        font-size: 30px;
        border-radius: 5px;
      }

      fieldset {
        padding: 20px;
        width: 100%;
        border-radius: 10px white;
        color: white;
        margin: 0 auto;
      }

      button {
        background-color: white;
        color: black;
        padding: 12px 22px;
        border: 2px solid black;
        font-family: "Comic Sans MS", cursive, sans-serif;
        margin: 0 25%;
      }
      button:hover {
        background-color: black;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <section>
        <strong>Map informations</strong>
      </section>
      <div>
        <fieldset>
          <legend>Risk index informations</legend>
        </fieldset>
        <br />
        <br />
        <br />
        <fieldset>
          <legend>Floods details</legend>
        </fieldset>
      </div>
      <br />
      <br />
      <br />
      <button @click=${this._onShowMap}>Show Routes on Map</button>
    `;
  }

  _onShowMap(event) {
    event.preventDefault();
    window.location.href = "mymap.html";
  }
}

window.customElements.define("irus-map", IrusMap);
