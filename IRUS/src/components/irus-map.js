import { LitElement, html, css } from "lit-element";

class IrusMap extends LitElement {
  //   static get styles() {
  //     return css`
  //       :host {
  //         width: 100%;
  //         height: 100%;
  //       }
  //       #map {
  //         width: 100%;
  //         height: 800px;
  //       }
  //     `;
  //   }

  static get properties() {
    return {
      src: { type: String },
      dst: { type: String },
    };
  }

  setData() {
    this.src = localStorage.src;
    this.dst = localStorage.dst;
    console.log(this.src, this.dst);
  }
  async initMap() {
    this.setData();
    const col = this.shadowRoot;
    console.log(col);
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();

    var map = new google.maps.Map(this.shadowRoot.getElementById("mapa"), {
      center: { lat: 44.439663, lng: 26.096306 },
      zoom: 14,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#242f3e" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });
    directionsDisplay.setMap(map);
    var request = {
      origin: this.src,
      destination: this.dst,
      travelMode: "DRIVING",
      provideRouteAlternatives: true,
    };

    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        for (var i = 0, len = result.routes.length; i < len; i++) {
          var dirs = new google.maps.DirectionsRenderer({
            map: map,
            directions: result,
            routeIndex: i,
          });
          const len = dirs.getDirections().routes[i].overview_path.length;
          var position = dirs.getDirections().routes[i].overview_path[
            Math.floor(len / 2)
          ];

          const coord = {
            lat: dirs.getDirections().routes[i].overview_path[0].toJSON().lat,
            lng: dirs.getDirections().routes[i].overview_path[0].toJSON().lng,
          };

          console.log(coord, len);
          const content =
            "Total distance: " +
            dirs.getDirections().routes[i].legs[0].distance.text +
            "<br/> Total duration: " +
            dirs.getDirections().routes[i].legs[0].duration.text +
            "<br/> Risk index: " +
            (Math.floor(Math.random() * 5) + 1) +
            "%";

          new google.maps.InfoWindow({
            content: content,
            map: map,
            position: position,
          });
        }
      }
    });
  }

  render() {
    return html`
      <button @click=${this._onShowMap}>Button</button>
      <br />
      <div name="mapa" id="mapa"></div>
    `;
  }

  _onShowMap(event) {
    event.preventDefault();
    this.initMap();
  }
}

window.customElements.define("irus-map", IrusMap);
