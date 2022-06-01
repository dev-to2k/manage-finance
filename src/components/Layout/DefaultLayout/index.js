import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <div className="container flex">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
