import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name = null, value, onChange, placeholder = null }) {
  return (
    <input
      type={type}
      name={name}
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      className="input input-bordered input-primary w-full max-w-xs"
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  value: '',
  placeholder: '',
};

export default Input;
