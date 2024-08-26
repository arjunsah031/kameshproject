import React, { useState } from "react";
import CssStyle from './DeleteNoteHandler.module.css';

import PageContainer from "../../../../Component/PageContainer/PageContainer";
import ConForAddUpdate from "../Com/ConForAddUpdate/ConForAddUpdate";
import PublicSpinner from "../../../../Component/PublicSpinner/PublicSpinner";
import MyModel from "../../../../Component/MyModel/MyModel";
import axios from "axios";
import { useSelector } from "react-redux";

const DeleteNoteHandler = props => {
   
    const token = useSelector( s => s.AuthReducer.loginAccessToken);

    const[ deleteSpiner, setdeleteSpiner ] = useState(false);
    const[ deleteSucMessage, setdeleteSucMessage ] = useState(false)

    const DelteHandler = () => {

        setdeleteSpiner(true);

        const myHeader = {

            headers: {

                Authorization: token

            }

        };

        axios.get( 'https://ezz9uc5d76.execute-api.ap-south-1.amazonaws.com/api/delete-note?noteId=' +props.selectedIdForDeleteNote, myHeader )

        .then( response => {

            const resCode = response.data.responseCode;

            if( resCode === '001') {

                setdeleteSucMessage(true)
                
            }
        }).catch( e => {

        })

    }
    
    const deleteNoteHandler = () => {

        props.fetchnoteHandler()

    }

   
    let containData = <ConForAddUpdate>

                            <div className={ CssStyle.ConformCon }>

                                <div className={ CssStyle.Text}>  Are u sure want to delete ? </div>

                                <div className={ CssStyle.ActionBtn } > 

                                    <button onClick={ () => props.CancelHandler(null) }> CANCEL </button>
                                    <button onClick={ DelteHandler } >  OK </button>

                                </div>

                            </div>

                    </ConForAddUpdate>;
       
    if( deleteSpiner ) {

        containData = <MyModel style = { { height: '10%',border : 'none',top:'120px'} }>

            <PublicSpinner/>

        </MyModel>
    }

    if( deleteSucMessage ) { 

        containData = <ConForAddUpdate>

            <div className={ CssStyle.deletemessageCon}>
                <div> DELETED SUCCESSFULLY </div>
                <button onClick={ deleteNoteHandler }>OK </button>
            </div>

        </ConForAddUpdate>

    }
    

    return containData;
}

export default DeleteNoteHandler;