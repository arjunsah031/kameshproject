import React from "react";
import CssStyle from './CustumTextArea.module.css';

const CustumTextArea = props  => {

    return <div className={ CssStyle.DIV}>
       
        <textarea 
            value={ props.value }  
            className={CssStyle.Text }
            onChange={ props.onChange}
             >
               

        </textarea>
        <div className={ CssStyle.Error }> { props.errorMessage} </div>
    </div>

    
}

export default CustumTextArea