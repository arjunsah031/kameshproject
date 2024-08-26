import React from 'react';
import Card from '../../../Component/Product/Card/Card';
import CarddBox from '../../../Component/Product/CarddBox/CarddBox';
import { Dummydata } from '../../../Component/Product/ProductDummydata/ProductDummydata';
import CssStyle from './CartIteam.module.css';

const CartIteam = () => {

    let containdata = Dummydata.map( iteam => {

        return <Card

            key = { iteam.id}
            id = { iteam.id}
            tittle = { iteam.tittle}
            price = { iteam.price }
            des = { iteam.des }
            duration = { iteam.duration}

        />
    })



    return <div>

        <CarddBox>

            { containdata}

        </CarddBox>

    </div> 
}

export default CartIteam; 