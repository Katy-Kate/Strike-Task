import React from "react";

export default class UIField extends React.PureComponent {
  render() {
    const {
      id,
      name,
      placeholderText,
      type,
      onChange,
      handleBlur,
      value,
      error
    } = this.props;

    return (
      <div className="sing-up-group">
        <input
          type={type}
          className="sing-up-field"
          id={id}
          placeholder={placeholderText}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}
