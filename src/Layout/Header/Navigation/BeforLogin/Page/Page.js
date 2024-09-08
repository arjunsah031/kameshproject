import React from "react";
import CssStyle from './Page.module.css';

import { NavLink } from "react-router-dom";


const Page = () => {
    

    return <ul className={ CssStyle.Con } >


        

        <li className={ CssStyle.Li } >

            <NavLink style = { ( {isActive}) => {

                return {
                    color: isActive ? ' rgba(245, 245, 245, 0.685)' : ''
                }}}   className={ CssStyle.navLink }  to='/about'  > ABOUT  </NavLink>

        </li>
        <li className={ CssStyle.Li } >

            <NavLink style = { ( {isActive}) => {

                return {
                    color: isActive ? ' rgba(245, 245, 245, 0.685)' : ''
                }}}   className={ CssStyle.navLink }  to='/test'  > PROJECT  </NavLink>

        </li>

        <li className={ CssStyle.Li } >

            <NavLink style = { ( {isActive}) => {

                return {
                    color: isActive ? ' rgba(245, 245, 245, 0.685)' : ''
                }}}   className={ CssStyle.navLink }  to='/prices'  > PRICE  </NavLink>

        </li>


        <li  className={ CssStyle.Li } >

            <NavLink style = { ( {isActive}) => {

                return {
                    color: isActive ? ' rgba(245, 245, 245, 0.685)' : ''
                }}}   className={ CssStyle.navLink }  to='/contact' > CONTACT  </NavLink>

        </li>

        
        <li className={ CssStyle.Li } >

            <NavLink style = { ( {isActive}) => {

                return {
                    color: isActive ? ' rgba(245, 245, 245, 0.685)' : ''
                }}}   className={ CssStyle.navLink }  to='/blog' > BLOG  </NavLink>

        </li>        

    </ul>

}

export default Page;