import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

class Contacts extends Component {
  render() {
    return (
      <div>
        <h2> Наши Контакты</h2>
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faMapMarker} />

        <a href="tel:+38065445678">+380(654)-456-78</a>
        <p>ПОЧТОВЫЙ АДРЕС</p>
        <div id="map" />
      </div>
    );
  }
}
export default Contacts;
