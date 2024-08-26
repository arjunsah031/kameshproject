import React, { useEffect, useState } from "react";
import CssStyle from './Price.module.css';

import CarddBox from "../../Component/Product/CarddBox/CarddBox";
import Card from "../../Component/Product/Card/Card";
import { Dummydata } from "../../Component/Product/ProductDummydata/ProductDummydata";

const Price = () => {

    const [ cardIteam, setCardIteam ] = useState([]);
    const [ status, setStatus ] = useState('') //fatching
    

    useEffect( () => {

        setCardIteam(Dummydata)
        setStatus('fatching')

    },[]);

    let containdata;

    if( status.length >= 1) {

        containdata = cardIteam.map( iteam => {

            return <Card

                key = { iteam.id}
                id = { iteam.id}
                tittle = { iteam.tittle}
                price = { iteam.price }
                des = { iteam.des }
                duration = { iteam.duration}

            />
        })
    } 

    return <section className={ CssStyle.Con } >

          <CarddBox> 
            {  containdata}
          </CarddBox>
       

    </section>
}

export  default Price;