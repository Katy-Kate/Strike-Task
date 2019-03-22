import React from "react";
import avatar from "../images/default-avatar.png";

export default class Avatar extends React.Component {
  render() {
    const { onChangeAvatar, img, error, avatar } = this.props;
    return (
      <div className="avatar">
        <img alt="avatar" src={img ? img : avatar} title="avatar" />
        <div className="mt-4 mb-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChangeAvatar}
            />
            <label className="custom-file-label" htmlFor="customFile">
              Choose avatar
            </label>
            {error ? <div className="invalid-feedback">{error}</div> : null}
          </div>
        </div>
      </div>
    );
  }
}
