import React from "react";
import CssStyle from './SliderControlByBtn.module.css';

const SliderControlByBtn = props => {

    return <div className={ CssStyle.Con } >
        <button onClick={ props.onClick}>
            Back
        </button>
    </div>
}

export default SliderControlByBtn;