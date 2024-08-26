import React from 'react';

import CssStyle from './HeadingPayment.module.css';

import MasterCardIcon from '../Icons/masterCardIcon.png';
import VisaCardIcon from '../Icons/visaCardIcon.png';
import UPIIcon from '../Icons/upiIcon.png';


const HeadingPayment = () => {


    return (

        <div className={ CssStyle.Con }>

            <div className={ CssStyle.HeadingTitle }>Payment</div>
            
            <div className={ CssStyle.InformationImagesCon }>

                <div className={ CssStyle.InformationText }>All transaction are secured and encrypted.</div>

                <div className={ CssStyle.PaymentLogoCon }>
                    <img src={ VisaCardIcon } />
                    <img src={ MasterCardIcon } />
                    <img src={ UPIIcon } />
                    <span>etc.</span>
                </div>
                
            </div>

        </div>

    );


}



export default HeadingPayment;



