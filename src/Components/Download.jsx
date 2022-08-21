import React from "react";

function Download() {
  return (
    <div className="download--wrapper">
      <div className="text--wrapper">
        <h5>Clipboard for ios and mac</h5>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </div>
      <div className="button--wrapper">
        <button className="btn ios">Download for iOS</button>
        <button className="btn mac">Download for Mac</button>
      </div>
    </div>
  );
}

export default Download;
