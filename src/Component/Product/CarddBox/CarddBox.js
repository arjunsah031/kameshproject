import React from "react";
import CssStyle from './CarddBox.module.css';

const CarddBox = props => {

    return <div className={ CssStyle.Con } >

        { props.children}

    </div>
}

export default CarddBox;