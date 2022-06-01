import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, type, onClick, ...props }) {
  return (
    <button {...props} type={type} onClick={type === 'submit' ? null : onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
};

export default Button;
