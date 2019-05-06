import React, { Component } from "react";
import Gallery from "../Gallery";
import { teamGallery } from "../../data/app_data";

class Team extends Component {
  render() {
    return (
      <div className="team">
        <Gallery dataGalery={teamGallery} />
      </div>
    );
  }
}
export default Team;
