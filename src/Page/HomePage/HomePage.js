import React from "react";
import { useSelector } from "react-redux";
import CssStyle from './HomePage.module.css';
import LoginSIgnup from "./LoginSIgnup/LoginSIgnup";
import MyNote from "./MyNote/MyNote";
import { LOGIN_SIGN_CONST } from "../../Component/MyCustumConstat/MyCustumConstat";

const HomePage = () => {

    window.scrollTo(0, 0);
    document.title = 'Home - My Notes';
    
    const token = useSelector( s => s.AuthReducer.isValidToken);
   

    return <React.Fragment>

       <section className={ CssStyle.Con } >

            { token === LOGIN_SIGN_CONST.validSession && <MyNote/> }
            { token === LOGIN_SIGN_CONST.sessionTimeOut && <LoginSIgnup/> }

       </section>

    </React.Fragment>


}

export default HomePage;