import React from "react";
import CssStyle from './Card.module.css';

const Card = props => {

    return <div className={ CssStyle.Con } >  { props.children } </div>

    
}

export default Card;