import React, { useState } from "react";
import CssStyle from './AddNewForm.module.css';

const AddNewForm = props => {

    const [ name, setName ] = useState('');
    const [ amount, setAmount] = useState('')
    const [ date, setDate ] = useState('')

    const nameChangeHandler = (event) => {

        setName(event.target.value)

    }

    const AmountChangeHandler = ( event) => {

        setAmount(event.target.value)

    }

    const ageChangeHandler = ( event) => {

        setDate(event.target.value)

    }

    const addpersondataHandler = event => {

        event.preventDefault();
        

        const personData = {

            Name : name,
            Amount: amount,
            Date : new Date(date),
            id : Math.random().toString()
        }

        props.onpersonData(personData)

        setName('')
        setDate('')
        setAmount('')
        

    }


    return <div className={ CssStyle.Con } >

        <form className={ CssStyle.Form}>

            <div className={ CssStyle.inputCon}>

                <input 
                    type="text"
                    placeholder="Name."
                    onChange={ nameChangeHandler }
                    value={ name }

                    />

            </div>

            <div className={ CssStyle.inputCon}>

                <input 
                    type="text"
                    placeholder="Prise"
                    onChange={ AmountChangeHandler }
                    value={ amount }

                    />

            </div>


            <div className={ CssStyle.inputCon} >

                <input 
                    type="date"
                    placeholder='date' 
                    onChange={ ageChangeHandler } 
                    value={ date }
                />

            </div>

            <div className={ CssStyle.inputCon}  style={ { marginTop : '10px'}} >

                <button onClick={ addpersondataHandler } className={ CssStyle.Btn } >
                    ADD NEW
                </button>

            </div>

        </form>

    </div>
}

export default AddNewForm;