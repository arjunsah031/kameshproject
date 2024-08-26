import React, { useEffect, useState } from "react";
import CssStyle from './Navigation.module.css';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import BeforLogin from "./BeforLogin/BeforLogin";
import AfterLogin from "./ProfilePage/AfterLogin";

import { LOGIN_SIGN_CONST } from "../../../Component/MyCustumConstat/MyCustumConstat";
import {  asignProfileDetailsAction } from "../../../Store/Actions/ProfileSysteam/ProfileSysteam";

import Cart from '../../../Assts/Icon/cart.png';

import { Link } from "react-router-dom";

const Navigation = () => {
   

    const addtocart = useSelector( s => s.AddtoCartReducer.addtocart);

    const[ dispatchDetails, setdispatchDetails ] = useState(false)

    const loginStatus = useSelector( s => s.AuthReducer.isValidToken);
    
    const token = useSelector( s => s.AuthReducer.loginAccessToken);

    const dispatch = useDispatch();


    useEffect( ()=> {

        if( token ) {

            const loginHeaders = {

                headers: {

                    Authorization: token 
                }

            };

            axios.get( 'https://yjv9pmdwe3.execute-api.ap-south-1.amazonaws.com/api/my-profile', loginHeaders)

            .then( response => {

                const resCode = response.data.responseCode;

                if( resCode === '001' ) {

                    
                    const Detail = response.data.profileDetails;

                    const profileDeetails = {

                        fullName : Detail.fullName,
                        gmailAddress : Detail.emailAddress,
                        time : Detail.accoutCreatedAt,
                        totalNote : Detail.totalNotes
                    }

                    dispatch( asignProfileDetailsAction( profileDeetails ));
                    setdispatchDetails(true)
                
                    
                }


            })
            

        }
    }, [ ] )

    return <div className={ CssStyle.Con } >

           { loginStatus === LOGIN_SIGN_CONST.sessionTimeOut && <BeforLogin/>  }
           { loginStatus === LOGIN_SIGN_CONST.validSession && dispatchDetails && <AfterLogin/> }

           <Link to = '/cart' className={ CssStyle.CartCon } >

                <img src={ Cart}  alt="carticon" />
                <span> { addtocart.length } </span>

           </Link>
          

    </div>
}

export default Navigation;