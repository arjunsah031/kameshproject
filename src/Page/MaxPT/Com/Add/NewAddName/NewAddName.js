
import React from "react";
import AddNewForm from "./AddNewForm/AddNewForm";
import CssStyle from './NewAddName.module.css';

const NewAddName = props => {

    const personDataHandler = personData => {

        props.onNewpersonData(personData)


    }

    return <div className={ CssStyle.Con } >

        <AddNewForm onpersonData={ personDataHandler }/>

    </div>

}

export default NewAddName;