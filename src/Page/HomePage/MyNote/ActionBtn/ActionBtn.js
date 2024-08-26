import React from "react";
import CssStyle from './ActionBtn.module.css';

const ActionBtn = props   => {

    return  <div  className={ CssStyle.Con }  >

        <button onClick={ props.onClick} className={ CssStyle.Btn } style={ props.mystyel ? props.mystyel:{} } > { props.btnName } </button>

    </div>;
}

export default ActionBtn;