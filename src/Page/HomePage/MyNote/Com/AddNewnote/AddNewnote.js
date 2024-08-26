import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CusBtn from "../CusBtn/CusBtn";
import CustumTextArea from "../CustumTextArea/CustumTextArea";
import CssStyle from './AddNewnote.module.css';

const AddNewnote = props  => {


    const token = useSelector( s => s.AuthReducer.loginAccessToken);

    const[ enterText, setenterText ] = useState('');
    const[ errorMessage, seterrorMessage ] = useState(null);

    const[ sentToserver, setSendtoServer ] = useState(false)

    const textHandler = event => {

        const EnterValue = event.target.value;

        if(EnterValue.length < 1001 ) {

            setenterText( EnterValue)

        } 

    }

    const sendtoServerNoteHandler = () => {

        

        const EnterValue = enterText.trim()

        if( EnterValue.length < 1) {

            seterrorMessage('note is required..');
            return
            
        }

        seterrorMessage(null)
        setSendtoServer(true);

        const postData = {

            note: EnterValue

        };

        const myHeader = {

            headers: {
                Authorization: token
            }

        };

        axios.post( 'https://ezz9uc5d76.execute-api.ap-south-1.amazonaws.com/api/add-new-note', postData, myHeader )

        .then( response => {

            const resCode = response.data.responseCode;

            if( resCode === '001') {

                props.createdNote()

            }

        }).then( e => {

            seterrorMessage( 'net work error Refesh the page.');
            setSendtoServer(false);

        })
        

    }

    return <React.Fragment>

        <CustumTextArea 

            
            onChange={ textHandler }
            value={enterText}
            errorMessage={ errorMessage }
            
            />
        <CusBtn

            isClick={ sendtoServerNoteHandler } 
            btnName='ADD NOTE'
            sendingserver={sentToserver}
            sendingtext='Adding note..'
        
        />

    </React.Fragment>
}

export default AddNewnote;