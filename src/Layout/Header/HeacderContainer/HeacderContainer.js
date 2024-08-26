import React, { useEffect, useState } from "react";
import CssStyle from './HeacderContainer.module.css';

const HeacderContainer = props => {

    // const[ scroll, setRandomBG ] = useState('rgba(255, 255, 255, 0.982)')
    // style={ { backgroundColor: scroll}}
    
   

    // const handleScroll = () => {

    //     if( (  window.pageYOffset > 0 ) && ( window.pageYOffset < 10 ) ) {

    //         setRandomBG('rgba(255, 255, 255, 0.982)');

    //     } else if ( (  window.pageYOffset > 9 ) && ( window.pageYOffset < 20 ) ) {

    //         setRandomBG('rgba(255, 255, 255, 0.982)');

    //     } else if ( (  window.pageYOffset > 19 ) && ( window.pageYOffset < 30 ) ) {

    //         setRandomBG('rgba(255, 255, 255, 0.982)');

    //     } else if ( (  window.pageYOffset > 29 ) && ( window.pageYOffset < 40 ) ) {

    //         setRandomBG('rgba(255, 255, 255, 0.982)');

    //     } else if ( (  window.pageYOffset > 39 ) && ( window.pageYOffset < 50 ) )  {

    //         setRandomBG('rgba(255, 255, 255, 0.982)');

    //     } else if ( (  window.pageYOffset > 60 ) ) {

    //         setRandomBG('rgba(255, 255, 255, 0.982)');
    //     }
    // }


    // useEffect( () => {
        
    //     window.addEventListener('scroll', handleScroll );
       
        
    // });

   

    return <header  className={CssStyle.Con} >

            <div className={ CssStyle.Container}>
                
               <div className={CssStyle.childrenCon}>  { props.children } </div>


            </div>

        </header>
    
}

export default HeacderContainer;

