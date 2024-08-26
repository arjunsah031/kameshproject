import React from "react";
import  CssStyle from './Cart.module.css';

import AddedIteam from "./AddedIteam/AddedIteam";
import CartIteam from "./CartIteam/CartIteam";



const Cart = () => { 

    window.scrollTo(0, 0);
    document.title = 'Cart - PersonalNotebook';
    
    return <section className={ CssStyle.Con}>
        
        <div className={ CssStyle.PaymentTittle}> PAYMENT </div>

        <AddedIteam/>

        <CartIteam/>
         
    </section>

}

export default Cart;