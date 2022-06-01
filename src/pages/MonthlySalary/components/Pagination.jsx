import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ onHandlePrev, onHandleNext, currentPage, ...props }) {
  return (
    <div {...props} className="btn-group">
      <button className="btn" onClick={onHandlePrev}>
        «
      </button>
      <button className="btn">Page {currentPage}</button>
      <button className="btn" onClick={onHandleNext}>
        »
      </button>
    </div>
  );
}

Pagination.propTypes = {
  onHandlePrev: PropTypes.func.isRequired,
  onHandleNext: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
