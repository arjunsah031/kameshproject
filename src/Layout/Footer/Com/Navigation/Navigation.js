import React from "react";
import CssStyle from './Navigation.module.css';

import { NavLink } from "react-router-dom";
import intro from '../../../../Assts/introduction.png'

const Navigation = () => {

    return <ul className={ CssStyle.Con } >
    
            <li className={ CssStyle.Li } >
    
                <NavLink style = { ( {isActive}) => {
    
                    return {
                        color: isActive ? ' rgba(3, 109, 151, 0.713)' : ''
                    }}}   className={ CssStyle.navLink }  to='/test'  > BASIC  </NavLink>
    
            </li>

           
    
            <li className={ CssStyle.Li } >
    
                <NavLink style = { ( {isActive}) => {
    
                    return {
                        color: isActive ? ' rgba(3, 109, 151, 0.713)' : ''
                    }}}   className={ CssStyle.navLink }  to='/advancept'  > ADVANCE   </NavLink>
    
            </li>

            <li className={ CssStyle.Li } >
    
                <div className={ CssStyle.imgCon}>
                      <img src={ intro} alt="introduction" />
                </div>
            </li>
    
    
            <li  className={ CssStyle.Li } >
    
                <NavLink style = { ( {isActive}) => {
    
                    return {
                        color: isActive ? ' rgba(3, 109, 151, 0.713)' : ''
                    }}}   className={ CssStyle.navLink }  to='/add' > MAX  </NavLink>
    
            </li>
    
            
            <li className={ CssStyle.Li } >
    
                <NavLink style = { ( {isActive}) => {
    
                    return {
                        color: isActive ? ' rgba(3, 109, 151, 0.713)' : ''
                    }}}   className={ CssStyle.navLink }  to='/articals' > ARTICLE  </NavLink>
    
            </li>        
    
        </ul>
}

export default Navigation;