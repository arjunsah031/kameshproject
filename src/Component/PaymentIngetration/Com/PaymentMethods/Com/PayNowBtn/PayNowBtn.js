import React from 'react';
import CssStyle from './PayNowBtn.module.css';

import PaySpinner from '../PaySpinner/PaySpinner';


const PayNowBtn = props => {


    let contentData = <button 
                        className={ CssStyle.Btn} 
                        onClick={ props.onClick } >{ "Pay Rs. " +props.txnAmount } </button>


    if( props.showLoader ) {

        contentData = <div className={ CssStyle.SpinnerStyle }>
            <PaySpinner borderColor="#000" width="20px" />
        </div>
    }


    return (
        <div className={ CssStyle.Con }>
            { contentData }
        </div>
    );

}

export default PayNowBtn;


