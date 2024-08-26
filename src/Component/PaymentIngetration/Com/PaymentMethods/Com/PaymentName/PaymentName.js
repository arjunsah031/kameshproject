import React from 'react';
import CssStyle from './PaymentName.module.css';


const PaymentName = props => {

    
    const ConStyle = [ CssStyle.Con ];
    const BtnStyle = [ CssStyle.Btn ]
    const MainCicleStyle = [ CssStyle.MainCircle ];
    const ChildCircleStyle = [ CssStyle.ChildCircle ];
    const PaymentNameTextStyle = [ CssStyle.PaymentNameText ];


    if( props.isCashPayment ) {

        ConStyle.push( CssStyle.DisableCon );
        BtnStyle.push( CssStyle.DisableBtn );
        MainCicleStyle.push( CssStyle.DisableMainCircle );
        ChildCircleStyle.push( CssStyle.DisableChildCircle );
        PaymentNameTextStyle.push( CssStyle.DisablePaymentNameText );
    }

    if( props.isSelected ) {

        MainCicleStyle.push( CssStyle.ActiveMainCircle );
    }


    return (

        <div className={ ConStyle.join( ' ' ) }  >

            <button  className={ BtnStyle.join( ' ' ) }  onClick={ props.paymentMethodHandler } >

                <div className={ CssStyle.ContentCon }>

                    <div className={ MainCicleStyle.join( ' ' ) }>
                        <div className={ ChildCircleStyle.join( ' ' ) }></div>
                    </div>

                    <div className={ PaymentNameTextStyle.join( ' ' ) }>{ props.paymentName }</div>

                </div>

            </button>

        </div>

    );

}

export default PaymentName;



