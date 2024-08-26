import React from 'react';
import CssStyle from './Suscribe.module.css';

const Suscribe = () => {

    return <div className={ CssStyle.Con }>

        <label> Subscribe to get important update </label>
        <div className={ CssStyle.InputCon }>
            <input placeholder='Enter email'/>
        </div>

        <div className={ CssStyle.BtnCon }>
            <button>SUBSCRIBE</button>
        </div>

    </div>
}

export default Suscribe;