import React from "react";
import "./collection-preview.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
