import React, { useState } from "react";
import CssStyle from './Logn.module.css';

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import CustumInput from "../Com/CustumInput/CustumInput";
import MyModel from "../../../Component/MyModel/MyModel";
import CustBtn from "../Com/CustBtn/CustBtn";

import { sanitizeEmail, validateEmailAddress } from '../../../Component/MyLogic/InputValidation'
import { loginSucessAction } from "../../../Store/Actions/Auth/Auth";
import { DOMAIN_URL, OPNE_CLOSE_SIGNUP_LOGIN } from "../../../Component/MyCustumConstat/MyCustumConstat";
import { showBox } from "../../../Store/Actions/LoginSignupBox/LoginSignupBox";

const Login = () => {

    const LoginSignupBox = useSelector( state => state.LoginsignupBox.showLoginSignBox);
    

    const[ gmailValue, setgmailValue ] = useState('');
    const[ gmailError, setgmailError ] = useState(null);

    const[ passwordValue, setpasswordValue ] = useState('')
    const[ passwordError, setpasswordError ] = useState(null)

    const[ spinner, setspinner ] = useState(false)
     
    const dispatch = useDispatch();

    const gmailHandler = event => {
        
        const enterGmail = sanitizeEmail(event.target.value)
        

        if(enterGmail.length < 51) {

            setgmailValue(enterGmail);
        }    
    }

    const passwordHandler = event => {

        const enterPassword = event.target.value;

        if(enterPassword.length <30) {

            setpasswordValue(enterPassword);
        } 
    }

    const LoginHandler = () => {

        let valideInputCount = 0;
        
        if( gmailValue.length < 1 ) {

            setgmailError('gmail is required..')
        }
        else if( validateEmailAddress(gmailValue) === 'VALID_EMAIL_ADDRESS') {

            setgmailError(null);
            valideInputCount = valideInputCount + 1;

        } else {

            setgmailError('Invalid email address.')

        }

        if( passwordValue < 1 ) {

            setpasswordError('Password is required..')

        }
        else if( passwordValue.length > 4) {

            setpasswordError(null);
            valideInputCount = valideInputCount + 1;

        }
        else {

            setpasswordError('Invalid password.')
        }

        if( valideInputCount === 2 ) {

            setspinner(true)

            const postData = {
                emailAddress: gmailValue,

                password: passwordValue 
            }

            axios.post( 'https://agrpj4x80m.execute-api.ap-south-1.amazonaws.com/apis/login', postData)
            
            .then( response  => {

                const resCode = response.data.responseCode;

                if( resCode === '000') {

                    setgmailError('email address is not register..')
                    setspinner(false)

                } 
                else if( resCode === '001') {

                    setpasswordError('password is mistake..')
                    setspinner(false)

                    
                } else if( resCode === '002') {

                    
                    dispatch(loginSucessAction(response.data.token))
                    window.location.replace(DOMAIN_URL)
                    
                }


            }).catch( () => {

                setpasswordError('network is error..')
                setspinner(false)

            })

        }
        
    }
    const closeHandler = () => {

       dispatch( showBox(OPNE_CLOSE_SIGNUP_LOGIN.closeBox))
    }

    const signupBoxHandler = () => {

        dispatch( (OPNE_CLOSE_SIGNUP_LOGIN.openSignupBox))  

    }

    

    return <React.Fragment>
        
            { LoginSignupBox === OPNE_CLOSE_SIGNUP_LOGIN.openloginBox && <MyModel  tittle="Login" closeBtn='&#10005;' onClick = { closeHandler }>

                <CustumInput
                    tittle='Enter Resister gmail..'
                    type="text"
                    placeholder=' Enter your login gmail.'
                    onChange={ gmailHandler }
                    value={ gmailValue }
                    errorMessage={ gmailError }
                  
                
                />
                <CustumInput
                    tittle='Enter your password..'
                    type="text"
                    placeholder=' Enter password'
                    onChange={ passwordHandler }
                    value={ passwordValue }
                    errorMessage={ passwordError }
                
                />

                <CustBtn 
                    onClick={ LoginHandler }  
                    btnName=' LOGIN '
                    isClickedBtn={spinner}
                    sendingServer='Logining..'
                    />

                    
            </MyModel> }

            

        </React.Fragment>
}

export default Login;