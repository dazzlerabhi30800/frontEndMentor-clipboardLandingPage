import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <img src="./images/logo.svg" alt="logo" />
      <div className="info--wrapper">
        <h1 className="heading">A history of everything you copy</h1>
        <p className="desc">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="button--wrapper">
          <button className="btn ios">Download for iOS</button>
          <button className="btn mac">Download for Mac</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
