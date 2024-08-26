import React from "react";
import CssStyle from './Articalimage.module.css';
import Articalimages from '../../../Assts/FooterImg/Artical.jpg'

const Articalimage = () => {

    return <div className={ CssStyle.Con }>

        <img src={ Articalimages } alt='articalimagess '/>

    </div>
}
export default Articalimage;