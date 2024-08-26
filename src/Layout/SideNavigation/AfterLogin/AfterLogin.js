import React from "react";
import CssStyle from './AfterLogin.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DOMAIN_URL } from "../../../Component/MyCustumConstat/MyCustumConstat";
import { logoutMeAction } from "../../../Store/Actions/Auth/Auth";
import { closeSideNavationActio } from "../../../Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";
import DetailProfile from "../../Header/Navigation/ProfilePage/PDhandler/DetailProfile/DetailProfile";

import NavPage from "../NavPage/NavPage";

const AfterLogin = () => {

    const profileDetailsofClint = useSelector( state => state.ProfileDetails.profileDetails);

   
    const navigate = useNavigate();
   
    const dispatch = useDispatch();

    const MynoteHandler = () => {

        navigate("/")
        dispatch(closeSideNavationActio())   
    }

    const logoutHandler = () => {

        dispatch(logoutMeAction())
        dispatch(closeSideNavationActio())
        window.location.replace(DOMAIN_URL)   
    }

    return  <div className={ CssStyle.Con } >

                <NavPage/>   

                <div className={ CssStyle.MynoteCon}>  

                   <button onClick={ MynoteHandler } className={ CssStyle.Btn } > MYNOTE </button>
                </div>

               <div className={ CssStyle.LogoutCon }>

                    <button onClick={ logoutHandler } className={ CssStyle.Btn } > LOGOUT </button>
               </div>

               <div className={ CssStyle.profileCon }> 

                    <DetailProfile

                        Name = { profileDetailsofClint.fullName }
                        Email = { profileDetailsofClint.gmailAddress }
                        Time = { profileDetailsofClint.time.monthYear+ ' ' + profileDetailsofClint.time.timeDate }
                        TotalNotes = { profileDetailsofClint.totalNote }
                        
                    />
              
               </div>

            </div>
}

export default AfterLogin;