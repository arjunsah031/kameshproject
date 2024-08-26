import React from "react";
import CssStyle from './LoginSIgnup.module.css';
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SIGN_CONST, OPNE_CLOSE_SIGNUP_LOGIN } from "../../../Component/MyCustumConstat/MyCustumConstat";
import { showBox } from "../../../Store/Actions/LoginSignupBox/LoginSignupBox";

import nature from '../../../Assts/nature2.jpg';

const LoginSIgnup = () => {

    const loginAccessToken = useSelector( s => s.AuthReducer.isValidToken);

    const dispatch = useDispatch();

    const LoginHandler = () => {

        dispatch( showBox( OPNE_CLOSE_SIGNUP_LOGIN.openloginBox))

    }

    const SignupHandler  = () => {
        dispatch( showBox( OPNE_CLOSE_SIGNUP_LOGIN.openSignupBox))

    }         

    return <section className={ CssStyle.Con }> 

        
                <div className={ CssStyle.loginsignCon } > 
                    <p>If you have already register 
                    <button onClick={ LoginHandler } >Login</button>  <br />Have not register yet? 
                    <button onClick={ SignupHandler } >Signup</button></p>
                </div>

                <div className={ CssStyle.imgCon}>l

                    <img src={nature } alt='nature' />
                </div>
    </section>
    
} 

export default LoginSIgnup;