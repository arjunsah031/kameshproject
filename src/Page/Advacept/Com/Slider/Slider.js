import React, { useEffect, useState } from "react";
import CssStyle from './Slider.module.css';

import FirstSlider from "./Com/FirstSlider/FirstSlider";


import fisrtslider from './Com/SliderImg/1_view/first_slider.png'
import secondSlider from './Com/SliderImg/1_view/second_slider.png'
import thirdSlider from './Com/SliderImg/1_view/third_slider.png'
import forthSlider from './Com/SliderImg/1_view/four_slider.png';
import SliderControl from "./Com/SliderControl/SliderControl";
import SliderControlByBtn from "./Com/SliderControlByBtn/SliderControlByBtn";

const Slider = () => {

    const[ x, setx ] = useState(0);
   
    const slider = [

        <FirstSlider style={{ transform: 'translateX(' +x +'%)'}} src = { fisrtslider }/>,

        <FirstSlider style={{ transform: 'translateX(' +x +'%)'}} src = { secondSlider}/>,

        <FirstSlider style={{ transform: 'translateX(' +x +'%)'}} src = { thirdSlider}/>,

        <FirstSlider style={{ transform: 'translateX(' +x +'%)'}} src = { forthSlider }/>,
       
    ]


    useEffect( () => {

        setTimeout(() => {
                        
            setx( s => {

               const traslatevalue = s === -100 * ( slider.length - 1 ) ?  0 : s - 100;
            
               return traslatevalue;
                
            });

        }, 5000 );

    }, [ x ] );

    const backHandler = () => {
        
        setx()

    }

    const y =  (x *(-4.8));

    return <React.Fragment>

                <section className={ CssStyle.Con } >

                    { slider.map( sliders => sliders) }

                </section>

                <SliderControl mystyle = {{ transform: 'translateX(' + y +'%)'}} />

                
    </React.Fragment>

    

}

export default Slider;