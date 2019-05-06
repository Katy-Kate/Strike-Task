import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import background from "../../images/map.png";
import { API_KEY_GOOGLE_MAP, map_options } from "../../data/app_data";
import Map from "./Map";

class Contacts extends React.PureComponent {
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
        <Map
          api={API_KEY_GOOGLE_MAP}
          options={map_options}
          background={background}
        />
      </div>
    );
  }
}
export default Contacts;
