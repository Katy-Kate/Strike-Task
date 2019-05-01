import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { API_KEY_GOOGLE_MAP, map_options } from "../../data/app_data";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      mapIsReady: false
    };
  }
  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY_GOOGLE_MAP}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.crossorigin = "anonymous";
    script.addEventListener("load", () => {
      console.log("ppp");
      this.setState({
        mapIsReady: true
      });
    });

    document.body.appendChild(script);
  };
  componentDidUpdate = () => {
    if (this.state.mapIsReady) {
      this.map = new window.google.maps.Map(
        document.getElementById("map"),
        //   {
        //   center: { lat: -34.397, lng: 150.644 },
        //   zoom: 12,
        //   mapTypeId: "roadmap"
        // }
        map_options
      );
      let marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(7.7186518, 81.7189023),
        map: this.map
      });
    }
  };
  render() {
    return (
      <div className="contacts-wrap">
        <div className="contacts">
          <div className="contacts_item">
            <FontAwesomeIcon icon={faGlobe} />
            com-srilanka.com
          </div>
          <div className="contacts_item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:srilanka.gmail.com"> srilanka.gmail.com</a>
          </div>
          <div className="contacts_item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+94772944306">+94 77 294 4306</a>
          </div>
          <div className="contacts_item">
            <FontAwesomeIcon icon={faMapMarker} />
            Navalady Rd, 30000, Шри-Ланка
          </div>
        </div>
        <div id="map" ref="map" />
      </div>
    );
  }
}
export default Contacts;
