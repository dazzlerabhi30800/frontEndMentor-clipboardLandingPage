import React from "react";

function FeatureCard({ data }) {
  return (
    <div className="feature--card">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}

export default FeatureCard;
