import React from 'react';
import CssStyle from './BlogIteam.module.css';


import likeIcon from '../../../../Assts/Icon/Heart.png';
import Adminicon from '../../../../Assts/Icon/Adminicon.png';


const BlogIteam = props => {

    return <div onClick={ props.onClick } className={ CssStyle.Con } >

        <div className={ CssStyle.BlogIteamCon } >  

            <img src={ props.url}  alt='blogiconss'/>   
        </div>

        <div className={ CssStyle.Describepart }> 

        <div className={ CssStyle.Admine } >
            <img src={ Adminicon }  alt="adminicons" />  
            { props.admin } 
        </div>

            <div className={ CssStyle.tittleDesCon } >

                <h3> {props.tittle } </h3> 
                <div> { props.des} </div> 

            </div>

            <div className={ CssStyle.ViewCommentCon } >

                <div className={ CssStyle.viewComment}>

                    <div className={ CssStyle.View}> 0 views </div>
                    <div className={ CssStyle.Comments }> { props.comment } Comments</div>

                </div>

                <div className={ CssStyle.LikeCon } >

                    <span> {props.totalLike } </span>
                    <img src={ likeIcon } alt='likeiconss'/>
                    
                </div>

            </div>
        </div>

    </div>
}

export default BlogIteam;