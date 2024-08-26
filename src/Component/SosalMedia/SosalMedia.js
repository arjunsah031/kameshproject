import React from 'react'
import CssStyle from './SosalMedia.module.css';

import { BsFacebook} from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import { TbBrandYoutube } from 'react-icons/tb';
import { CgInstagram } from 'react-icons/cg'

// import youtube from '../../Assts/Icon/youtube.png';
// import instagram from '../../Assts/Icon/instagram.png';
// import twitter from '../../Assts/Icon/twitter.png';
// import facebook from '../../Assts/Icon/facebook.png';
import { IconContext } from 'react-icons';
import { color, style } from '@mui/system';

const SosalMedia = props => {

    const size = props.size ;
    const color = props.color;
    const backgroundcolor = props.backgroundcolor;
    
    const IconStyle = {
        
        fontSize: size,
        color : color,
        backgroundColor : backgroundcolor
        
    }

    return <div className = { `${CssStyle.Con} ${props.className}`}>

        <IconContext.Provider value={ { className:CssStyle.Icon, style:IconStyle } }>

            <a  className={ CssStyle.ImgCon} href='https://youtu.be/LQKahQz0lbc'>

                <TbBrandYoutube/>
            
            </a >

            <a  className={ CssStyle.ImgCon} href='https://m.facebook.com/photo.php?fbid=1149685272105206&id=100011912314348&set=a.105817569825320&source=11&refid=17'>

                <BsFacebook/>
            </a >

            <a  className={ CssStyle.ImgCon} href='https://instagram.com/sandeep__maheshwari?igshid=YmMyMTA2M2Y=' >

            <CgInstagram/>
            </a >

            <a  className={ CssStyle.ImgCon} href='https://wa.me/qr/BNXK7DJARPPOB1'>

            <ImWhatsapp/> 
            </a >

        </IconContext.Provider>

    </div>
}

export default SosalMedia;