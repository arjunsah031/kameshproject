import React, { useState }  from "react";
import CssStyle from './SnContainer.module.css';

import closeicon from '../../../Assts/Icon/icons8-close-91.png'
import { useDispatch, useSelector } from "react-redux";
import { closeSideNavationActio } from "../../../Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";

const SnContainer = props => {

    

    const openCloseSideNavigation = useSelector( state => state.OpenCloseSideNavigtion.OpenCloseSideNavigation);
    
    const CssStyles = [ CssStyle.Con, openCloseSideNavigation ? CssStyle.CloseNavigation : CssStyle.OpenNavigation ]

    

    const dispatch = useDispatch();


    const CloseSideNavigatinHandler = () => {

        dispatch( closeSideNavationActio());

    }

    return <React.Fragment>

        { openCloseSideNavigation && <div onClick={ CloseSideNavigatinHandler } className={ CssStyle.Layer } /> }
        { openCloseSideNavigation && <div  className={ CssStyles.join(' ')}>

                    <div className={ CssStyle.closeBtn }><img onClick={ CloseSideNavigatinHandler } src={ closeicon} alt=" clos"/></div>
                   { props.children}
                </div>}
        

    </React.Fragment>

     

       
}

export default SnContainer;