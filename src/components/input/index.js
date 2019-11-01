import React from "react";
import PropTypes from 'prop-types';

function Input({ className }) {
  return <input className={className} />;
}

Input.propTypes = {
  className: PropTypes.string
}

Input.defaultProps = {
  className: ''
}

export default Input;
