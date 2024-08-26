import React from "react";
import CssStyle from './NavPage.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeSideNavationActio } from "../../../Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";



const NavPage = () => {

   
    const navigate = useNavigate();
   
    const dispatch = useDispatch();

    const basicPtHander = () => {

        navigate("/about")
        dispatch(closeSideNavationActio())
    }

    const advancePtHandler = () => {

        navigate("/contact")
        dispatch(closeSideNavationActio())
    }

    const maxPtHander = () => {

        navigate("/blog")
        dispatch(closeSideNavationActio())
    }

    const planHandler = () => {

        navigate("/prices")
        dispatch(closeSideNavationActio())

    }


    return  <div className={ CssStyle.Con } >

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ basicPtHander } className={ CssStyle.Btn } > ABOUT </button>
                </div>

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ advancePtHandler } className={ CssStyle.Btn } > CONTACT</button>
                </div>

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ maxPtHander } className={ CssStyle.Btn } > BLOG </button>
                </div>

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ planHandler } className={ CssStyle.Btn } > PLAN </button>
                </div>

            </div>
}

export default NavPage;