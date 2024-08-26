import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageContainer from "../../../../Component/PageContainer/PageContainer";

import PublicSpinner from "../../../../Component/PublicSpinner/PublicSpinner";
import ConForAddUpdate from "../Com/ConForAddUpdate/ConForAddUpdate";
import UpdateNote from "./UpdateNote/UpdateNote";
import CssStyle from './UpdateNoteHandler.module.css';

const UpdateNoteHandler = props => {
   

    const selectedId  = props.selectedIdforUpdate;
    

    const token = useSelector( s => s.AuthReducer.loginAccessToken);

    const[ compType, setcompType ] = useState('feting_single_note') // fetingnote updateBox, SucessBox
    const[ noteDes, setnoteDes ] = useState('')

    useEffect( () => {

        const myHeader = {

            headers: {

                Authorization: token

            }

        };

        axios.get( 'https://ezz9uc5d76.execute-api.ap-south-1.amazonaws.com/api/view-single-note?noteId=' +selectedId, myHeader)

        .then( response => {

            const resCode = response.data.responseCode;

            if( resCode === '001') {

                setnoteDes(response.data.singleNote.note);
                setcompType('UpdateBox')
            }
        })

    }, [ ] );

    const sucessUpdateHandler = () => { 

        props.fetchNoteHandler();
        
    }

   
    let containData = null

    if( compType === 'feting_single_note' ) {
        
        containData = <ConForAddUpdate Mystyle = { {backgroundColor: 'rgba(0, 0, 0, 0.333)'}}>

            <div className={ CssStyle.ConformCon }>

                <PublicSpinner/> 

            </div>

        </ConForAddUpdate>;
        

    }
    else if( compType === 'UpdateBox' ) {

        containData =  <ConForAddUpdate onClick={ () => props.cancalBtn(null) } BoxType = 'FORM_BOX' BoxName='Update Note.' closeBtn='&#10005;'>

           <UpdateNote

                NoteDes = {noteDes}
                selectedId={selectedId}
                SuccessBox={ () => setcompType('SucessBox') }
           />

        </ConForAddUpdate>;

    }
    else if( compType === 'SucessBox' ) {

        containData =  <ConForAddUpdate  >

           <div className={ CssStyle.sucessMessageCon } >

                <div> NOTE UPDATED SUCCESSFULLY </div>
                <button onClick={ sucessUpdateHandler }> OK </button>

           </div>
           

        </ConForAddUpdate>;

    }

    return containData;
    
}

export default UpdateNoteHandler;