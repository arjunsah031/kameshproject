import axios from "axios";
import CssStyle from './MyNote.module.css';

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PageContainer from "../../../Component/PageContainer/PageContainer";
import PublicSpinner from "../../../Component/PublicSpinner/PublicSpinner";
import SingleNote from "./SingleNote/SingleNote";
import CreateNewNote from "./CreateNewNote/CreateNewNote";
import DeleteNoteHandler from "./DeleteNoteHandler/DeleteNoteHandler";
import { DOMAIN_URL } from "../../../Component/MyCustumConstat/MyCustumConstat";
import UpdateNoteHandler from "./UpdateNoteHandler/UpdateNoteHandler";

const MyNote = () => {

    const token = useSelector( s => s.AuthReducer);

    const[ comType, setcomType ] = useState('FETCHING') //fetting, gotData
    const[ noteDetail, setnoteDetails ] = useState( [] );

    const[ isDeleteId, setisDeleteId ] = useState(null);
    const[ isUpdateId, setisUpdateId ] = useState(null);
    

    const fetchNoteHandler = () => {

        setcomType('FETCHING');
        setisDeleteId(null)
        setisUpdateId(null)

        const myHeader = {

            headers: {
                Authorization: token.loginAccessToken
            }
        };

        axios.get('https://ezz9uc5d76.execute-api.ap-south-1.amazonaws.com/api/view-all-notes', myHeader )

        .then( response => {

            const resCode = response.data.responseCode;

            if( resCode === '001' ) {
                setnoteDetails(response.data.noteItems);
                setcomType('GOT_DETAILS')
            }

        }).catch( e => {

            window.location.reload(DOMAIN_URL);

        })


    }

    useEffect( () => {

         fetchNoteHandler();

    }, [ ] );

    const DeleteHandler = deleteId => {

        setisDeleteId( deleteId )
    }

    const UpdateHandler = updateID =>  {

        setisUpdateId( updateID )
        
    }

    let containData = null; 

    if( comType === 'FETCHING') {

        containData = <PageContainer>

            <div className={ CssStyle.FettchingData}>
                <PublicSpinner />
            </div>

        </PageContainer>;

    }
    else if( comType === 'GOT_DETAILS') {

        containData = <PageContainer>

            <CreateNewNote fetchNoteHandler={ fetchNoteHandler }/>

            { isDeleteId && <DeleteNoteHandler

                CancelHandler={ DeleteHandler }
                selectedIdForDeleteNote={ isDeleteId }
                fetchNotHandler={ fetchNoteHandler }
                fetchnoteHandler = { fetchNoteHandler }
            
            />}

            { isUpdateId && <UpdateNoteHandler

                cancalBtn = { UpdateHandler }
                selectedIdforUpdate = {isUpdateId }
                fetchNoteHandler={fetchNoteHandler}
            
            />}



            { noteDetail.map( items =>

                            <SingleNote 
    
                                key ={items.noteId}
                                Note = { items.note}
                                Time = {items.createdAt.dayTime+ ',' +items.createdAt.monthYear }
                                noteDetails = {items}
                                deleteHandler={ DeleteHandler }
                                updateHandler={ UpdateHandler }
                            /> 
            
            ) }

        </PageContainer>
        
    }

    return containData;   
}

export default MyNote;