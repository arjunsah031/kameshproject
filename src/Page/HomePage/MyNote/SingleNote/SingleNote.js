import React from "react";
import ActionBtn from "../ActionBtn/ActionBtn";
import CssStyle from './SingleNote.module.css';

const SingleNote = props => {

    const DetailNote = props.noteDetails;

    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.noteIteams}>

            <div className={ CssStyle.Time } > { props.Time} </div>

            <div className={ CssStyle.notetext }>  
                { props.Note}
            </div>

            <div className={ CssStyle.btnContainer}> 

                    <ActionBtn onClick={ () => props.deleteHandler(DetailNote.noteId)} btnName='DELETE' mystyel={ { backgroundColor: '#DA1212'}}  />
                    <ActionBtn onClick={ () => props.updateHandler(DetailNote.noteId)} btnName='UPDATE'  />

            </div>

        </div>
       
    </div>


}

export default SingleNote;