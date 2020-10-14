import React from "react";
import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <div
      className={`${size} menu-item`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <sapn className="subtitle">SHOP NOW</sapn>
      </div>
    </div>
  );
}

export default MenuItem;
