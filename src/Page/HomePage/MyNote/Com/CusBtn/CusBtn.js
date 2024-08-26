import React from "react";
import CssStyle from './CusBtn.module.css';

const CusBtn = props  => {

    let data = <button onClick={ props.isClick } className={ CssStyle.Btn } > { props.btnName} </button>;

    if( props.sendingserver ) {

        data = <div className={ CssStyle.text}> { props.sendingtext } </div>

    }

    return <div className={ CssStyle.Con } >

            { data }
        
    </div>
}
export default CusBtn;