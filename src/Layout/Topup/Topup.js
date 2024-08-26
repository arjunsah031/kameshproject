
import React, { useEffect,useState} from 'react';
import CssStyle from './Topup.module.css';

import { BsArrowUpCircleFill } from 'react-icons/bs'

const Topup = () => {

    const [ visible, setVisible ] = useState( false)

    const topupHandler = () => {
        window.scrollTo({ top : 0, left:0, behavior: 'smooth'})
        
    }

    const scrollHandler = () => {

        let ScrollHeight = '100';

         const Scroll = window.scrollY;

         if( Scroll > ScrollHeight ) {

            setVisible(true)

         } else {

            setVisible(false)
            
         }
    }

   useEffect( () => { 

    window.addEventListener( 'scroll', scrollHandler);
    return () =>  window.removeEventListener( 'scroll', scrollHandler);

   }, [] )
 
    return <>

   { visible && <div  className={ CssStyle.Con }>
    <button onClick={ topupHandler } >
            <BsArrowUpCircleFill size={'100%'} color={ 'blue'}/>
        </button>
    
     </div>
}
    </>
}

export default Topup;