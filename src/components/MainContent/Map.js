import React from "react";

let map;

class Map extends React.PureComponent {
  initMap = () => {
    let el = document.getElementById("map");
    if (el) {
      map = new window.google.maps.Map(el, this.props.options);
      new window.google.maps.Marker({
        position: new window.google.maps.LatLng(7.7186518, 81.7189023),
        map
      });
    }
  };

  addMap = () => {
    if (typeof window.google !== "undefined") {
      this.initMap();
      return;
    }
    let el = document.getElementById("map");
    if (el && el.children.length === 0) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        this.props.api
      }`;
      script.async = true;
      script.defer = true;
      script.setAttribute = ("name", "map");
      script.addEventListener("load", () => {
        this.initMap();
      });
      document.body.appendChild(script);
    }
  };
  componentDidMount = () => {
    this.addMap();
  };

  render() {
    const mapStyles = {
      flexGrow: 1,
      height: "230px",
      minWidth: "300px",
      backgroundImage: `url(${this.props.background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
    return <div id="map" style={mapStyles} />;
  }
}
export default Map;
