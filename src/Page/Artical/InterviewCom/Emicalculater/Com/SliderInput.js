import React from "react";
import CssStyle from './SliderInput.module.css';
import { numberWithCommas } from "../Utils/Config";


function SliderInput({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle
}) {
  return (
    <React.Fragment>
      <span className={ CssStyle.title}>{title}</span>
      {state > 0 && (
        <span className={ CssStyle.title} style={{ textDecoration: "underline" }}>
          {underlineTitle}
        </span>
      )}
      <div>
        <input
          type="range"
          min={min}
          max={max}
          className={ CssStyle.slider}
          value={state}
          onChange={onChange}
        />
        <div className={ CssStyle.lables}>
          <label>{labelMin ?? numberWithCommas(min)}</label>
          <b>{numberWithCommas(state)}</b>
          <label>{labelMax ?? numberWithCommas(max)}</label>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SliderInput;
