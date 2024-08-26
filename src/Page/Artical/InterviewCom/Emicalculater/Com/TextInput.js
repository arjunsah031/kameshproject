import React from "react";
import CssStyle from './TextInput.module.css'

function TextInput({ title, state, setState }) {
  return (
    <React.Fragment>
      <span className={ CssStyle.title}>{title}</span>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={title}
      />
    </React.Fragment>
  );
}

export default TextInput;