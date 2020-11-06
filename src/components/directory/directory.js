import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item";
import { useSelector } from "react-redux";
import { selectDirectoryItems } from "../../redux/directory/directory.selectors";

function Directory() {
  const sections = useSelector(selectDirectoryItems);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </div>
  );
}

export default Directory;
