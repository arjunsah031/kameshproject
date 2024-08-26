import React from "react";
import CssStyle from './PageContainer.module.css';

const PageContainer = props => {

    return <div className={ CssStyle.Response }>
        <div className={ CssStyle.Con }>
            
            <div className={ CssStyle.text } >
                {  props.children }  
            </div>
        </div>
    </div>
}

export default PageContainer;