import React, { useState } from "react";
import CssStyle from './LogoutHandler.module.css';

import MyModel from "../../../../../Component/MyModel/MyModel";
import PublicSpinner from "../../../../../Component/PublicSpinner/PublicSpinner";
import axios from "axios";
import { DOMAIN_URL } from "../../../../../Component/MyCustumConstat/MyCustumConstat";
import { logoutMeAction } from "../../../../../Store/Actions/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";


const LogoutHandler = props => {
   

    const logoutToken = useSelector( s => s.AuthReducer.loginAccessToken );
    const dispatch = useDispatch();

    const[isLogout, setisLogout ] = useState(false)

    const logoutHandler = () => {

        setisLogout(true);

        axios.get('https://agrpj4x80m.execute-api.ap-south-1.amazonaws.com/apis/logout?token=' +logoutToken )
        .then( respnse => {

            const resCode = respnse.data.responseCode;

            if( resCode === '001') {
                dispatch(logoutMeAction())
                window.location.replace(DOMAIN_URL)
            }

        }).catch( () => {

            window.location.replace(DOMAIN_URL)

        })
    }


    return <React.Fragment>

        { isLogout && <MyModel style = { { height: '10%',border : 'none',top:'120px'} } >

        <PublicSpinner/>
        </MyModel>}
      

        <div className={  CssStyle.Con }> 

            <button onClick={ logoutHandler } className={ CssStyle.LogoutBtn}> LOGOUT </button>

        </div>

    </React.Fragment>
}

export default LogoutHandler;