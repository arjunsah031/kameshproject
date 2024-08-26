import React from "react";
import CssStyle from './SucessMessage.module.css';

const SucessMessage = props  => {

    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.Message }>
            { props.sucessMessage }
        </div>
        
        <button onClick={props.onClick} className={ CssStyle.Btn } >
                ok
        </button>

    </div>
}

export default SucessMessage;