import React from 'react';
import CssStyle from './MobileApp.module.css';

import MobileIcon from '../Icon/mobilePayIcon.png';
import PayNowBtn from '../../../../Com/PayNowBtn/PayNowBtn';


const MobileApp = props => {


    const orderDetails = props.orderDetails;


    return (
        
        <div className={ CssStyle.Con }>

            <div className={ CssStyle.MobileAppCon }>

                <div className={ CssStyle.MobileAppCon_ImageCon }>
                    <img src={ MobileIcon } />
                </div>

                <div className={ CssStyle.MobileAppCon_Des }>
                    <span className={ CssStyle.MobileAppCon_Des__FirstText }>Pay Using UPI APP</span>
                    <span className={ CssStyle.MobileAppCon_Des__SeconText }>Choose from UPI on your phone</span>
                </div>

            </div>

            <div className={ CssStyle.ErrorMessage }>{ props.errorMessage }</div>

            <PayNowBtn 
                txnAmount={ orderDetails.txnAmount }
                onClick={ props.payNowHandler }
                showLoader={ props.showSpinner }
            />

            <div className={ CssStyle.OrCon }>
                <span>Or</span>
            </div>

        </div>

    );


}


export default MobileApp;



