import React from "react";
import CssStyle from './ChartBar.module.css';

const ChartBar = props => {

    let lebelHeight = '0%';

    if( props.maxValue > 0) {

        lebelHeight = Math.round((props.value / props.maxValue) * 100) + '%';
        
        
    }

    return <div className={ CssStyle.ChartBar } >

        <div className={ CssStyle.CartBarInner }  >

            <div  className={ CssStyle.ChartBarFill } style={ { height : lebelHeight }} > </div>

        </div>

        <div className={ CssStyle.CharBarLable } >
            { props.Lable } 
        </div>
    </div>

}

export default ChartBar;