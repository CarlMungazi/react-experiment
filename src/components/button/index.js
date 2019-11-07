import React from "react";
import PropTypes from "prop-types";

function Button({ children, type, ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

Button.defaultProps = {
  type: "button"
};

export default Button;
