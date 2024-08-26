import React,{ useState} from "react";
import CssStyle from './Card.module.css';

import DolarIcon from '../../../Assts/Icon/dolarIcon.png';
import CusBtn from "../CusBtn/CusBtn";
import { useDispatch, useSelector } from "react-redux";

const Card = props => {

    const AddtoCartid = useSelector( s =>s.AddtoCartReducer.addtocart);
    const selectedid = AddtoCartid.filter( s => s === props.id).length === 1 ? true : false;

    const [ addedid, setAddedid ] = useState( selectedid ? props.id : '---')
    console.log(addedid)

    
    const onMouseOverHandlrer = hoverid => {
        setAddedid(hoverid)
    }

    const onMouseLeaveHandler = leaveid => {

    }

    let backcolor ;
    let col;
    if( addedid === props.id ) {
        backcolor = 'rgba(0, 0, 0, 0.601)'
        col = 'white'
    }

    return <div className={ CssStyle.Con } >

        <div  className={ CssStyle.Card}  style={{ backgroundColor : backcolor, color:col }}  >

            <div className={ CssStyle.Tittle}> { props.tittle } </div>

            <div className={  CssStyle.RupesCon }>

                <img className={  CssStyle.Img } src={ DolarIcon } alt="dolaricon"/>
                <div className={ CssStyle.Price}> { props.price } </div>

            </div>


            <div className={ CssStyle.Des}> { props.des } </div>

            <div className={ CssStyle.ValidDate }> valid for { props.duration }    month </div>

            <CusBtn 

                id = { props.id }
                addedid={ addedid }
                onMouseOver={ onMouseOverHandlrer }
                onMouseLeave={ onMouseLeaveHandler  }
                selectedid={ selectedid }
            />


        </div>


     </div>
    
}

export default Card;