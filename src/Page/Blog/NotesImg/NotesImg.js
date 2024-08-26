import React from "react";
import CssStyle from './NotesImg.module.css';
import natureImg from '../../../Assts/FooterImg/Natureimg.jpg'

const NotesImg = () => {

    return <div className={ CssStyle.Con } >

        <img src={ natureImg } alt='naturimgasfs' />
        <div> thoughts & notes </div>

    </div>
}

export default NotesImg;