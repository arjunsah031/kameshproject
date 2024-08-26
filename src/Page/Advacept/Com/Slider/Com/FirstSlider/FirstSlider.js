import React from "react";
import CssStyle from './FirstSlider.module.css';

const FirstSlider = props  => {

    return <div className={ CssStyle.Con } style={ props.style } >

            <img className={ CssStyle.Image }  src={ props.src } alt='first' />

    </div>
}

export default FirstSlider;