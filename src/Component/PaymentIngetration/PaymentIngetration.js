import React from 'react';
import CssStyle from './PaymentIngetration.module.css';


import TotalPaymentCount from './Com/TotalPaymentCount/TotalPaymentCount';
import HeadingPayment from './Com/HeadingPayment/HeadingPayment';

import PaymentMethods from './Com/PaymentMethods/PaymentMethods';

import GoBackBtn from './Com/GoBackBtn/GoBackBtn';


const PaymentIngetration = props => {


    const orderDetails = {

        txnToken: props.txnToken,
        txnOrderId: props.orderId,
        txnAmount: props.txnAmount
    };


    const showGoBackBtn = props.showGoBackBtn;
    const goBackOnClick = props.goBackOnClick;


    return (

        <div className={ CssStyle.Con }>

            <TotalPaymentCount txnAmount={ orderDetails.txnAmount }/>

            <HeadingPayment />
            
            <PaymentMethods 
                orderDetails={ orderDetails }
            />

            { showGoBackBtn && <GoBackBtn goBackOnClick={ goBackOnClick } /> }

        </div>

    );

    
}

export default PaymentIngetration;





