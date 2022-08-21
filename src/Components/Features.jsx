import React from "react";
import FeatureCard from "./FeatureCard";
import data from "./FeatureData";

function Feature() {
  const FeatureCardComp = data.map((data, index) => {
    return <FeatureCard data={data} key={index} />;
  });
  return (
    <div className="feature--wrapper">
      <div className="text--wrapper">
        <h2 className="title">Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="feature--container">
        <div className="hero--img">
          <img src="./images/image-computer.png" alt="computer" />
        </div>
        <div className="features">{FeatureCardComp}</div>
      </div>
    </div>
  );
}

export default Feature;
