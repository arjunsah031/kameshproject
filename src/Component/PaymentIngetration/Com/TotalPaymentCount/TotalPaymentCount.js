import React from 'react';
import CssStyle from './TotalPaymentCount.module.css';

import CartImage from '../Icons/cart.png';
import WhiteRupeesIcon from '../Icons/whiteRupeesIcon.png';


const TotalPaymentCount = props => {

    
    return (

        <div className={ CssStyle.Con }>

            <div className={ CssStyle.CartCon }>
                <img src={ CartImage }/>
                <span>Your total amount</span>
            </div>

            <div className={ CssStyle.RupeesCon }>
                <img src={ WhiteRupeesIcon } />
                <span>{ props.txnAmount }</span>
            </div>
            
        </div>
    );

}

export default TotalPaymentCount;



