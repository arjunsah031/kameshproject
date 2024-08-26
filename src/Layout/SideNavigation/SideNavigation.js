import React from "react";
import CssStyle from './SideNavigation.module.css';

import SnContainer from "./SnContainer/SnContainer";
import Page from "./AfterLogin/AfterLogin";
import LoginSignup from "./BeforLogin/BeforLogin";
import { useSelector } from "react-redux";
import { isvalidTokenAction } from "../../Store/Actions/Auth/Auth";
import { LOGIN_SIGN_CONST } from "../../Component/MyCustumConstat/MyCustumConstat";
import AfterLogin from "./AfterLogin/AfterLogin";
import BeforLogin from "./BeforLogin/BeforLogin";
import SosalMedia from "../../Component/SosalMedia/SosalMedia";

const SideNavigation = () => {

   const isValidToken = useSelector( state => state.AuthReducer.isValidToken);

    return <SnContainer>

                { isValidToken === LOGIN_SIGN_CONST.sessionTimeOut && <BeforLogin/>}
        
                { isValidToken === LOGIN_SIGN_CONST.validSession && <AfterLogin/>}

                <div className={ CssStyle.Con}>
                    <SosalMedia

                        className = { CssStyle.Social}
                        color = 'white'
                        size = '35px'
                                            
                    />
                </div>

            </SnContainer>
}

export default SideNavigation;