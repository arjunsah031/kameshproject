import React from "react";
import CssStyle from './Advacept.module.css';
import SecSlider from "./Com/SecSlider/SecSlider";
import Slider from "./Com/Slider/Slider";

const Advacept = () => {

    return <section className={ CssStyle.Con }>

        <Slider/>
        <SecSlider/>
        

        
       
    </section>
}

export default Advacept;