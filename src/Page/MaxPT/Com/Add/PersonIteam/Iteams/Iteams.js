import React from "react";
import CssStyle from './Iteams.module.css';

const Iteams = props  => {

        const year = props.Date.getFullYear();
        const month = props.Date.getMonth();
        const day = props.Date.getDate()


    return <div className={ CssStyle.Con } >

        <div className={ CssStyle. iteams } >
                {props.Name } 
        </div>

        <div className={ CssStyle. iteams } >
                {props.Amount } 
        </div>

        <div className={ CssStyle. iteams } >
                 
                <span> { day } </span>
                <span> { month } </span>
                <span> {  year} </span>
        </div>

        
    </div>

}

export default Iteams;