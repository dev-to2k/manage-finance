import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <div className="container flex items-stretch">
        <Sidebar />
        <div className="content w-full">{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
