import React, { useState } from "react";
import CssStyle from './CreateNewNote.module.css';

import AddNewnote from "../Com/AddNewnote/AddNewnote";
import ConForAddUpdate from "../Com/ConForAddUpdate/ConForAddUpdate";
import SucessMessage from "../Com/SucessMessage/SucessMessage";


const CreateNewNote = props  => {
    

    const[ ishowFormBox, setishowFormBox ] = useState(false);
    const[ sucessBocshowHide, setsucessBocshowHide ] = useState(false);

    const[ state, setstate ] = useState(false)

    const newNoteHandler = () => {
        setstate(true)
        setishowFormBox(true)
    }

    const closeFormBoxHandler = () => {

        setstate(false)
        
        setTimeout(() => {

            setishowFormBox(false)
            
        }, 400);
            
    }

    const showSucessBoxHandler = () => {

        setsucessBocshowHide(true)
        setishowFormBox(false)
    }

    const sucessHandler = () => {

        setsucessBocshowHide(false)
        props.fetchNoteHandler()
    }


    let containData = null;

    if( ishowFormBox  ) {

        containData =  <ConForAddUpdate show={ state } onClick={ closeFormBoxHandler } BoxType = 'FORM_BOX'BoxName='Add New Note' closeBtn='&#10005;' >

            <AddNewnote createdNote={ showSucessBoxHandler }/>
            
        </ConForAddUpdate>

    } 
    else if( sucessBocshowHide ) {

        containData = <ConForAddUpdate onClick={ closeFormBoxHandler }  >

                <SucessMessage
                
                    sucessMessage='NOTE CREATED SUCCESSFULLY'
                    onClick={ sucessHandler }
                />
            
        </ConForAddUpdate>

    }

    return <React.Fragment>

            { containData }

            <div className={ CssStyle.Con } >
                <button onClick={ newNoteHandler } className={ CssStyle.Btn } >CREATE NEW NOTE</button>
            </div>
            
    </React.Fragment>
}

export default CreateNewNote;