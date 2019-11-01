import React from "react";
import PropTypes from 'prop-types';

function Card({tag: Element, children, className }) {
  return (
    <Element className={className}>
      { children }
    </Element>
  );
}

Card.propTypes = {
  tag: PropTypes.oneOf(['div', 'section', 'article']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string
}

Card.defaultProps = {
  tag: 'div',
  className: ''
}

export default Card;
