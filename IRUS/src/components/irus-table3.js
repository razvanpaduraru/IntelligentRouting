import { LitElement, html, css } from "lit-element";

class IrusTable3 extends LitElement {
  static get styles() {
    return css`
      strong {
        color: white;
        font-size: 30px;
      }
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
      }

      h1 {
        margin: 0 35%;
        width: 100%;
        padding: 20px;
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
        margin: 0 20%;
      }

      p {
        margin: 0 5%;
        font-size: 20px;
      }

      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        border: 1px solid;
        text-align: center;
        padding: 8px;
      }
    `;
  }

  static get properties() {
    return {
      page: { type: String },
      lat: { type: String },
      lon: { type: String },
      elv: { type: String },
      timeGeo: { type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    console.log(this.lat, this.lon, this.elv, this.timeGeo);
    return html`
    <h1><strong>Azimuth and Altitude (zenithal distance)</strong></h2>
    <div class="container">
      <fieldset>
        <legend>Input</legend>
        <table>
        <tr>
            <th>Day (D)</th>
            <th>Month (M)</th>
            <th>Year (Y)</th>
            
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
        <br />
        <br />
        <br />
        <table>
        <tr>
            <th>Univeral Time (UT)</th>
            <th>Latitude of Observer (north is positive and south is negative)</th>
            <th>Local Longitude in degrees (east is positive and west is negative)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Data</legend>
        <table>
        <tr>
            <th>Julian Date (JD)</th>
            <th>T</th>
            <th>L (remove multiple of 360)</th>
            <th>G</th>
            <th>Lambda</th>
            <th>Epsilon</th>
            <th>E</th>
            <th>Greenwich hour angle in degrees (GHA)</th>
            <th>Delta (declination of body; north is positive and south is negative)</th>
            <th>SD</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Local hour of body in degrees</legend>
        <table>
        <tr>
            <th>LHA (local hour of body in degrees)</th>
            <th>LHA >= 0</th>
            <th>LHA <= 180</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Altitude - zenithal distance</legend>
        <table>
        <tr>
            <th>sin a</th>
            <th>A</th>
            <th>x = tan A (tan of Azimuth)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Azimuth of body measured eastward from north over the range 0°<=A<=360°</legend>
        <table>
        <tr>
            <th>x > 0</th>
            <th>x < 0</th>
            <th>x > 0</th>
            <th>x < 0</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
    </div>
      `;
  }
}

window.customElements.define("irus-table-three", IrusTable3);
