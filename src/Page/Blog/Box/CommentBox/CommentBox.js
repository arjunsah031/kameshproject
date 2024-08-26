import React, { useState } from 'react';
import CssStyle from './CommentBox.module.css';
import ProfileIcon from '../../../../Assts/Icon/profile.png';

import Gif from '../../../../Assts/Icon/Gif.png'
import emoji from '../../../../Assts/Icon/emoji.png';
import Camara from '../../../../Assts/Icon/Camara.png';
import VideoReacord from '../../../../Assts/Icon/VideoReacord.gif'

import AddIcon from '../../../../Assts/Icon/AddIcon.png'
import CommentList from '../CommentList/CommentList';

const CommentBox = props => {

    const [opencloseCommentBox, setopenclosComementBox ] = useState(false);
    const [addComment, setAddComment ] = useState(false);

    const [ data, setData ] = useState([]);
    console.log(data)
  
     

    const [ text, setText ] = useState('')
    

    const  opencloseMessboxHandler = props => {
        setopenclosComementBox( (s) => !s)

    }
    const addCommentHandler = () => {

        setAddComment( s => !s)
    }

    const onchangeHandler = event => {

        setText(event.target.value)

    }

    const postdataHandler = () => {

        const postdata = {
           
        }

        setData( ( previusdata ) =>  {

            return [ ...previusdata, {  text : text,id : Math.random() }]
        })

    }

  

    return <div className={ CssStyle.Con }>
 
        <h1>COMMENTS</h1>

        { !opencloseCommentBox && <div className={ CssStyle.InputCon } onClick={ opencloseMessboxHandler } > 

                <img src={ ProfileIcon } alt='commenticons'/>

                <input  type="text" placeholder='Write a Comments'  />
                
        </div>}

        { opencloseCommentBox && <div className={ CssStyle.CommentCon }  > 

                
                    <img className={ CssStyle.AdminCon } src={ ProfileIcon } alt='commenticons'/>

                   
                    <div className={ CssStyle.Comment}> 

                       
                        <textarea onChange={ onchangeHandler } type="text" placeholder='Write a Comments' />

                        <div className={ CssStyle.addemojiCon}> 

                            <div className={ CssStyle.imgIcon } >

                                <img className={CssStyle.Img} src={ Camara } alt="ProfileIconicon" />
                                <img className={CssStyle.Img} src={ emoji } alt="ProfileIconicon" />
                                <img className={CssStyle.Img} src={ Gif } alt="ProfileIconicon" />
                                <img className={CssStyle.Img} src={ VideoReacord } alt="emogiicon" />

                            </div>

                            <div className={ CssStyle.AddimgCon }> 
                                <img onClick={ addCommentHandler } src={ AddIcon }  alt="addicons" />
                            </div>

                            <div className={ CssStyle.CommentControl}>

                                <button onClick={ opencloseMessboxHandler } className={ CssStyle.Cancel }  > CANCEL </button>
                                <button onClick={ postdataHandler } className={ CssStyle.Public } > PUBLIC </button>
                            </div>

                        </div> 
                    </div> 

                    { addComment && <div className={ CssStyle.AddCommentCon }> 

                        <h2> Add your Comment </h2>

                        <div className={ CssStyle.AddCommentimgIcon } >

                            <img className={CssStyle.Img} src={ Camara } alt="ProfileIconicon" />
                            <img className={CssStyle.Img} src={ emoji } alt="ProfileIconicon" />
                            <img className={CssStyle.Img} src={ Gif } alt="ProfileIconicon" />
                            <img className={CssStyle.Img} src={ VideoReacord } alt="emogiicon" />

                        </div>


                    </div> }      
        </div>}

        { data.map( iteam => {

            return <CommentList

                text = { iteam.text} 

            />
        })}
        
        
    </div>
}

export default CommentBox;