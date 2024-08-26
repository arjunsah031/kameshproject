import React from 'react';
import CssStyle from './Products.module.css';
import { useDispatch } from 'react-redux';
import { deleteCartAction } from '../../../../Store/Actions/AddtoCart/AddtoCart';



const Products = props => {
    
    const dispatch = useDispatch();

    const deletecartHandler = id => {

        dispatch( deleteCartAction(id));

    }

    return <div className={ CssStyle.Con } >

        <div className={ CssStyle.Summry}> ORDER SUMMARY </div>

        <div className={ CssStyle.PlanCon}>

            <div> Plan </div>
            <div> { props.tittle }  </div>
        </div>


        <div className={ CssStyle.DurationCon } >  

            <div> Duration</div>
            <div> { props.duration } month</div>
        </div>

        <div className={ CssStyle.DeleteCon }>

            <button onClick={ () => deletecartHandler(props.id) } >delete</button>

        </div>

    </div>
}

export default Products;