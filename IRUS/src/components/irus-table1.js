import { LitElement, html, css } from "lit-element";

class IrusTable1 extends LitElement {
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
    <h1><strong>Sunrise and Sunset Algorithm at height H</strong></h2>
    <div class="container">
      <fieldset>
        <legend>Input</legend>
        <table>
        <tr>
            <th>Day</th>
            <th>Month</th>
            <th>Year</th>
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
            <th></th>        
            <th>Sexagesimal grade and grade fractions</th>
            <th>Grades</th>
            <th>Minutes</th>
        </tr>
        <tr>
            <td>Sunrise and Sunset 0H</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>Sunrise and Sunset H</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>Latitude</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>Longitude</td>
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
            <th>Height</th>
            <th>Meters</th>
            <th>Other unit</th>
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
        <legend>Calculate the day of the year</legend>
        <table>
        <tr>
            <th>N1</th>
            <th>N2</th>
            <th>N3</th>
            <th>N</th>
        </tr>
        <tr>
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
        <legend>(R) = rising, (S) = seting</legend>
        <table>
        <tr>
            <th>t(RT) / t(ST) = IngHour</th>
            <th>For rising time = t(RT)</th>
            <th>For seting time = t(ST)</th>
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
        <legend>Sun's mean anomaly</legend>
        <table>
        <tr>
            <th>M(RT)</th>
            <th>M(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Sun's true longitude</legend>
        <table>
        <tr>
            <th>L(RT)</th>
            <th>L(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Sun's right ascension</legend>
        <table>
        <tr>
            <th>RA(RT)</th>
            <th>RA(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>
        Right ascension value needs to be in the same quadrant as L
        </legend>
        <table>
        <tr>
            <th>Lquadrant(RT)</th>
            <th>RAquadrant(RT)</th>
            <th>RA(RT)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
        <table>
        <tr>
            <th>Lquadrant(ST)</th>
            <th>RAquadrant(ST)</th>
            <th>RA(ST)</th>
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
        <legend>
            Right ascension value converted into hours
        </legend>
        <table>
        <tr>
            <th>RA(RT)</th>
            <th>RA(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>
        Sun's declination
        </legend>
        <table>
        <tr>
            <th>sinDec(RT)</th>
            <th>cosDec(RT)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
        <table>
        <tr>
            <th>sinDec(ST)</th>
            <th>cosDec(ST)</th>
        </tr>
        <br />
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>
            Sun's local hour angle
        </legend>
        <table>
        <tr>
            <th>cosH(RT)</th>
            <th>cosH(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>
            Calculating H and convert into hours
        </legend>
        <table>
        <tr>
            <th>H(RT)</th>
            <th>H(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>-- (hours)</td>
            <td>-- (hours)</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>
            Sun's local hour angle
        </legend>
        <table>
        <tr>
            <th>T(RT)</th>
            <th>T(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>
            Adjust back to UTC (maybe need to add/substract 24h)
        </legend>
        <table>
        <tr>
            <th>T(RT)</th>
            <th>T(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>

        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
      <br />
      <br />
      <br />
      <fieldset>
        <legend>
            Convert UT value to local time zone of latitude/longitude
        </legend>
        <table>
        <tr>
            <th>UT(RT)</th>
            <th>UT(ST)</th>
        </tr>
        <tr>
            <td>--</td>
            <td>--</td>
        </tr>

        <tr>
            <td>--</td>
            <td>--</td>
        </tr>

        <tr>
            <td>--</td>
            <td>--</td>
        </tr>
        </table>
      </fieldset>
    </div>
      `;
  }
}

window.customElements.define("irus-table-one", IrusTable1);
