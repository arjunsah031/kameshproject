import React from "react";
import CssStyle from './CommentList.module.css';

import profileIcon from '../../../../Assts/Icon/Adminicon.png'

const CommentList = props => {

    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.UserCon }>

            <img src={ profileIcon } alt='profiles' />
            <span className={ CssStyle.user}> UsareName </span>

        </div>

        <span className={ CssStyle.text } > { props.text } </span>

    </div>
} 

export default CommentList;