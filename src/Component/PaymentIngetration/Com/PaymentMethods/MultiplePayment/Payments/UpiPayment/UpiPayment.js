import React from "react";

import PaymentChildrenBox from '../../Com/PaymentChildrenBox/PaymentChildrenBox';

import EnterUpiPayment from './EnterUpiPayment/EnterUpiPayment';
import MobileAppPayment from './MobileAppPayment/MobileAppPayment';


const UpiPayment = props => {

    const orderDetails = props.orderDetails;

    return <React.Fragment>
        
        <PaymentChildrenBox>

            <MobileAppPayment orderDetails={ orderDetails } />

            <EnterUpiPayment orderDetails={ orderDetails } />

        </PaymentChildrenBox>

    </React.Fragment>;

}


export default UpiPayment;


