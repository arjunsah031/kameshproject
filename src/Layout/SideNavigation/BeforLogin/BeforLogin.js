import React from "react";
import CssStyle from './BeforLogin.module.css';

import { useDispatch } from "react-redux";
import { openLoginAction, opensignupAction } from "../../../Store/Actions/LoginSignupBox/LoginSignupBox";
import { closeSideNavationActio } from "../../../Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";

import { OPNE_CLOSE_SIGNUP_LOGIN } from "../../../Component/MyCustumConstat/MyCustumConstat";
import { showBox } from "../../../Store/Actions/LoginSignupBox/LoginSignupBox";
import NavPage from "../NavPage/NavPage";


const BeforLogin = () => {

    const dispatch = useDispatch();

    const LoginHandler = () => {

        dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.openloginBox));
        dispatch(closeSideNavationActio())
    }

    const signupHandler = () => {

        dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.openSignupBox));
        dispatch(closeSideNavationActio())
    }

    return  <div>

        <NavPage/>
         
         <div className={ CssStyle.Con }  >

                <button onClick={ LoginHandler } className={ CssStyle.Btn}> LOGIN </button>
                <button onClick={ signupHandler } className={ CssStyle.Btn}> SIGNUP </button>

            </div>

    </div>
}

export default BeforLogin;