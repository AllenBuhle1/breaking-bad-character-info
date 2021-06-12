import React, { useState } from "react";
import { input } from "./Search.module.css";

const Search = (props) => {
  const [textInput, setTextInput] = useState("");
  const onChange = (q) => {
    setTextInput(q);
    props.onChange(q);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Type Name..."
          autoFocus
          value={textInput}
          onChange={(e) => onChange(e.target.value)}
          className={input}
        />
      </form>
    </div>
  );
};

export default Search;
