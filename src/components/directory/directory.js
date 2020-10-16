import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item";
import sections from "./sectionsList";

function Directory() {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </div>
  );
}

export default Directory;
