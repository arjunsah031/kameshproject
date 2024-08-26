import React from "react";
import CssStyle from './SliderControl.module.css';

const SliderControl = props => {

    return <div className={ CssStyle.Con  } >

        <span className={ CssStyle.Circule} style={props.mystyle ? props.mystyle : {} }>

            

        </span>

    </div>
}

export default SliderControl;