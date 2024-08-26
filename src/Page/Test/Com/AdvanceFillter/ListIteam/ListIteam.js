import React from "react";
import CssStyle from './ListIteam.module.css';
import place from '../../../../../Assts/place.jpg'

const ListIteam = props => {

   
    return <div className={ CssStyle.CardRap }>

        
        <div className={ CssStyle.Con }> 

            <div className={ CssStyle.imgCon}> 
                <img src={ place} alt='hel' />
            </div>

            <div className={ CssStyle.DesCon }>

                <div> { props.tittle}  </div>
                <div> { props.star }  </div>
 
            </div>

        </div>
        

    </div>
}

export default ListIteam;