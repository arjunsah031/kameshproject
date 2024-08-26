
import React, { useState }  from "react";
import CssStyle from './PDhandler.module.css';

import { useSelector } from "react-redux";
import DetailProfile from "./DetailProfile/DetailProfile";
import LogoutHandler from "../LogoutHandler/LogoutHandler";


const PDhandler = props => {

    const profileDetailsofClint = useSelector( state => state.ProfileDetails.profileDetails);
    
    const[ isshowProfileD, setisshowProfile ] = useState(false);

    const BtnStyle = [ CssStyle.ProfileBtn];

    if( isshowProfileD ) {

        BtnStyle.push( CssStyle.ActiveBtn )

    }
    
    const showHideprofileHandler = () => {

        setisshowProfile( s => !s)
    }

    const closeHandler = () => {
        
        setisshowProfile(false)
    } 

    return <div className={ CssStyle.MainCon } >

                <div className={  CssStyle.Con } >

                    <button onClick={ showHideprofileHandler }  className={ BtnStyle.join(' ')}> { profileDetailsofClint.fullName.charAt( 0 ) } </button>

                </div>

                { isshowProfileD &&  <React.Fragment> 

                        <div onClick={ closeHandler } className={ CssStyle.Layer }></div>

                        <div className={ CssStyle.LayerCon}>

                            <DetailProfile

                                Name = { profileDetailsofClint.fullName }
                                Email = { profileDetailsofClint.gmailAddress }
                                Time = { profileDetailsofClint.time.monthYear+ ' ' + profileDetailsofClint.time.timeDate }
                                TotalNotes = { profileDetailsofClint.totalNote }
                    
                            />

                            <LogoutHandler/>
                            
                        </div> 

                    </React.Fragment>        
                    
                }

    </div>
}

export default PDhandler;