import React, { useEffect, useState } from "react";
import CssStyle from './CheackLoginToken.module.css';

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { isvalidTokenAction, logoutMeAction } from "../../Store/Actions/Auth/Auth";
import { LOGIN_SIGN_CONST, DOMAIN_URL } from "../MyCustumConstat/MyCustumConstat";
import MyModel from "../MyModel/MyModel";


const CheackLoginToken = () => {

    const [ isError, setisError ] = useState(false);
    const dispatch = useDispatch();

    const loginTokenValue  = useSelector( s => s.AuthReducer.loginAccessToken );
   

    

    const loginHandler = () => {

        axios.get( 'https://agrpj4x80m.execute-api.ap-south-1.amazonaws.com/apis/check-session?token=' +loginTokenValue ) 

        .then( serverResponsee => {

            const resCode = serverResponsee.data.responseCode;

            if( resCode === '001') {
                
                dispatch(isvalidTokenAction(LOGIN_SIGN_CONST.validSession))


            } else if( resCode === '000') {

                    
                    dispatch( logoutMeAction());
                    window.location.replace( DOMAIN_URL );
            }


        }).catch( error => {

            setisError(true)


        });
    }

    useEffect( () => {

        if( loginTokenValue ) {

            loginHandler();

        }
        else {
            
            dispatch( isvalidTokenAction( LOGIN_SIGN_CONST.sessionTimeOut ) )
            
        }
        
    }, [ ]);

    
    let containData = null;
   
         if( isError ) {

            containData = <MyModel style = { { height: '7%',border : 'none'}}>

                            <div className={ CssStyle.Con } > Networ error occured..  </div>
            </MyModel> ;

         }
    
    

    return containData;
}

export default CheackLoginToken;