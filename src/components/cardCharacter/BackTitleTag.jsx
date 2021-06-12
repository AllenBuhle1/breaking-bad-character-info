import React from "react";
import { title, value } from "./BackTitleTag.module.css";

const BackTitleTag = ({ Title, Value }) => {
  return (
    <div>
      <span className={title}>{Title}</span>
      <span className={value}>{Value}</span>
    </div>
  );
};

export default BackTitleTag;
