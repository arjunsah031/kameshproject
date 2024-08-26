import React from "react";
import CssStyle from './AddedIteam.module.css';

import Products from "./Products/Products";
import { Dummydata } from "../../../Component/Product/ProductDummydata/ProductDummydata";
import { useNavigate } from "react-router-dom";
import CheckoutBtn from "./Com/CheckoutBtn/CheckoutBtn";

import { useDispatch, useSelector } from "react-redux";
import PaymentIngetration from "../../../Component/PaymentIngetration/PaymentIngetration";
import { cancelTxnAction } from "../../../Store/Actions/TxnDetails/BuyNowProduct";


const AddedIteam = props => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const PaymentState = useSelector( s => s.BuyNowProductReducer);

    const Productid = useSelector( s => s.AddtoCartReducer.addtocart);

    const selectedIteam = Dummydata.filter( ({id}) => Productid.includes(id) );

    const addtocardHandler = () => {
        navigate('/prices')
    }

    const cancelTxnHandler = () => {

        dispatch(cancelTxnAction())


    }

    
    let containdata;

    if( selectedIteam.length > 0) {

        containdata = selectedIteam.map( iteam => {

            return <Products

                key = { iteam.id}
                id = { iteam.id}
                tittle = { iteam.tittle}
 
                duration = { iteam.duration}
            
            />
        })
    }
    else if( selectedIteam .length < 1) {
        containdata = <div className={ CssStyle.AddtocartBtnCon }> 
        <button onClick={addtocardHandler }>ADD TO CARD</button>
    </div>
    }

    return <div className={ CssStyle.Con } >


        <div className={ CssStyle.AddediteamCon }>

            { containdata }

        </div> 

        <div className={ CssStyle.CheckoutBtnCon } >

            { !PaymentState.showPaymentOptions && <CheckoutBtn/>}   

            { PaymentState.showPaymentOptions && <PaymentIngetration

                    txnToken={ PaymentState.txnToken }
                    orderId={ PaymentState.orderId }
                    txnAmount={ PaymentState.txnAmount }

                    showGoBackBtn={ true }
                    goBackOnClick={ cancelTxnHandler }

            /> }


        </div>




        

        

    </div>

}

export default AddedIteam;