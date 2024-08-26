import React from 'react';
import CssStyle from './PaymentChildrenBox.module.css';


const PaymentChildrenBox = props => {

    return (

        <div className={ CssStyle.Con }>

            { props.children }

        </div>

    );


}

export default PaymentChildrenBox;



