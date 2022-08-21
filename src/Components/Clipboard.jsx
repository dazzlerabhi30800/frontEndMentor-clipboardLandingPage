import React from "react";
import "./style.css";

function Clipboard() {
  return (
    <div className="clipboard--wrapper">
      <div className="text--wrapper">
        <h4 className="title">Access Clipbard Anywhere</h4>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <div className="ipad--img">
        <img src="./images/image-devices.png" alt="ipad" />
      </div>
      <div className="text--wrapper">
        <h4>SuperCharge your Workflow</h4>
        <p>We've got the tools to boost the productivity</p>
      </div>
      <div className="workflow--wrapper">
        <div className="workflow--card">
          <img src="./images/icon-blacklist.svg" alt="blacklist" />
          <h5>Create blacklists</h5>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="workflow--card">
          <img src="./images/icon-text.svg" alt="text" />
          <h5>Plain text snippets</h5>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="workflow--card">
          <img src="./images/icon-preview.svg" alt="preview" />
          <h5>Sneak Preview</h5>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
      <div className="brand--wrapper">
        <img src="./images/logo-google.png" alt="google" />
        <img src="./images/logo-ibm.png" alt="ibm" />
        <img src="./images/logo-microsoft.png" alt="microsoft" />
        <img src="./images/logo-hp.png" alt="hp" />
        <img src="./images/logo-vector-graphics.png" alt="vector-graphics" />
      </div>
    </div>
  );
}

export default Clipboard;
