import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { OPNE_CLOSE_SIGNUP_LOGIN } from "../../../../Component/MyCustumConstat/MyCustumConstat";
import {  showBox } from '../../../../Store/Actions/LoginSignupBox/LoginSignupBox';
import profileIcon from '../../../../Assts/Icon/profile.png';

import CssStyle from './BeforLogin.module.css';
import Page from "./Page/Page";

const BeforLogin = () => {


    const dispatch = useDispatch();

    

    const signupBoxHandler = () => {

        dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.openSignupBox))  

    }

    return  <div className={ CssStyle.Con } >

                
                <Page/>

                <div className={ CssStyle.LoginSignupCon }>

                    <img src={ profileIcon } alt=" profile" />

                    <button onClick={ signupBoxHandler } className={ CssStyle.LoginSignupBtn } >
                        Signup
                    </button>

                </div> 
                
                
        
            </div>
}

export default BeforLogin;