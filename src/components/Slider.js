import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      indexOfSliderImage: 0
    };
  }
  onChangeSlider = data => {
    if (this.state.indexOfSliderImage < this.props.imagesForSlider.length - 1) {
      this.setState(prevState => ({
        indexOfSliderImage: prevState.indexOfSliderImage + data
      }));
    } else {
      this.setState({
        indexOfSliderImage: 0
      });
    }
  };
  render() {
    const { imagesForSlider } = this.props;
    return (
      <div className="silder">
        <div className="slider_wraper">
          {imagesForSlider
            .map((item, i) => {
              return (
                <div
                  key={i}
                  className={
                    i === this.state.indexOfSliderImage
                      ? "slider_bgImage slider_bgImage--active"
                      : "slider_bgImage"
                  }
                  style={{
                    backgroundImage: `url(${item})`
                  }}
                />
              );
            })
            .reverse()}
        </div>
        <button
          className="arrowBtn silder_btn silder_btn--left"
          onClick={() => this.onChangeSlider(-1)}
          disabled={this.state.indexOfSliderImage === 0}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          className="arrowBtn silder_btn silder_btn--right"
          onClick={() => this.onChangeSlider(+1)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    );
  }
}
export default Slider;
Slider.propTypes = {
  imagesForSlider: PropTypes.array.isRequired
};
