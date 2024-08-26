import React, { useState } from "react";
import CssStyle from './SecSlider.module.css';

import FirstSlider from "../Slider/Com/FirstSlider/FirstSlider";

import fisrtslider from '../Slider/Com/SliderImg/1_view/first_slider.png'
import secondSlider from '../Slider/Com/SliderImg/1_view/second_slider.png'
import thirdSlider from '../Slider/Com/SliderImg/1_view/third_slider.png'
import forthSlider from '../Slider/Com/SliderImg/1_view/four_slider.png';




const SecSlider = () => {

    const slider = [

        <FirstSlider style ={{ transform: 'translateX(50%)'}}  src = { fisrtslider }/>,

        <FirstSlider style ={{ transform: 'translateX(50%)'}} src = { secondSlider}/>,

        <FirstSlider style ={{ transform: 'translateX(50%)'}} src = { thirdSlider}/>,

        <FirstSlider style ={{ transform: 'translateX(50%)'}} src = { forthSlider }/>,
         
    ]

    const styleforNext = [ CssStyle.NextBtn ];

    const styleforBack = [ CssStyle.BackBtn];

    

    const[ count, setCount ] = useState(0);

    
    
    if( count === slider.length - 1) {

        styleforNext.push( CssStyle.disablenextbtn ); 
    }

    else if( count < 1 ) {

        styleforBack.push( CssStyle.disablebackbtn ); 

    }
    
    const backHandler = ()  => {

        setCount( count - 1)
        
      
    }

    const NextHandlr = () => {

        setCount( count + 1 );

        
        

    }

    return <section className={ CssStyle.Con  } >

            <div  > 
            { slider[count] }
            </div>

            <div className={ CssStyle.ActionCon } >
            
                <div>

                    <button className={ styleforBack.join(' ') }  onClick={ backHandler } >Back</button>

                </div>
                
                <div>
                <button className={ styleforNext.join(' ')} onClick ={ NextHandlr } >next</button>
                </div>

            </div>

    </section>
}

export default SecSlider;