import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CssStyle from './Logo.module.css';
import Logos from '../../../Assts/logo1.png'



const Logo = () => {

    

    return <div className={ CssStyle.Con } >

      

            {/* <div className={ CssStyle.Name }> ARJUN KUMAR  </div>

            <div className={ CssStyle.Des}> Personal Notebook </div> */}

            <img className={ CssStyle.Logoimg } src={ Logos } alt="logos"/>
            
      

        {/* <Link to="/#" className={ CssStyle.LINK } > NOTE BOOK </Link> */}

    </div>
}

export default Logo;