import React from "react";
import CssStyle from './AfterLogin.module.css';

import { NavLink } from "react-router-dom";
import PDhandler from "./PDhandler/PDhandler";
import Page from "../BeforLogin/Page/Page";

const AfterLogin = () => {
    
    return <ul className={ CssStyle.Con } >

        <Page/>

        <li className={ CssStyle.Li } >

            <NavLink style = { ( {isActive}) => {

                return {
                    color: isActive ? 'rgba(245, 245, 245, 0.717)' : ''
                }}}    className={ CssStyle.navLink }   to='/' > MYNOTE </NavLink>

        </li>

        <PDhandler/>

    </ul>

}

export default AfterLogin;