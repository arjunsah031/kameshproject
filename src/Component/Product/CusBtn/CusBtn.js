import React, { useState } from "react";
import CssStyle from './CusBtn.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoCartAction } from "../../../Store/Actions/AddtoCart/AddtoCart";


const CusBtn = props => {
   
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const selectHandler = id => { 

        dispatch( addtoCartAction(id))
      
    }

    const gotocardhandler = () => {
        navigate('/cart');

    }


    let backcolor ;
    if( props.addedid === props.id ) {
        backcolor = 'rgba(0, 128, 0, 0.872)'
    }

    let containdata = <button 

            style={{ backgroundColor : backcolor }}
            className={ CssStyle.AddtoCartBtn }  
            onClick={ () => selectHandler(props.id) }
            onMouseOver={ () => props.onMouseOver(props.id)}
            onMouseLeave={  () => props.onMouseOver('hbdicsbh ') }
            > SELECT </button>

    if( props.selectedid) {

        containdata = <button 

            style={{ backgroundColor : backcolor }}
            className={ CssStyle.GotocardBtn}
            
           
            onClick={ () => gotocardhandler(props.id) }
            onMouseOver={ () => props.onMouseOver(props.id)}
            
            > go to card </button>
  

    }
    return <div className={ CssStyle.Con }>

        { containdata}
 
        
        
    </div>
}

export default CusBtn;