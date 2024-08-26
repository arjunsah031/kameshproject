import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustBtn from "../../Com/CustBtn/CustBtn";
import CustumInput from "../../Com/CustumInput/CustumInput";
import CssStyle from './SignupCom.module.css';
import { sanitizeEmail } from "../../../../Component/MyLogic/InputValidation";
import { validateEmailAddress } from "../../../../Component/MyLogic/InputValidation";

const SignupCom = props => {

    const LoginSignupBox = useSelector( state => state.LoginsignupBox.showLoginSignBox);

    const[ fullName, setfullName ] = useState('');
    const[ fullNameError, setfullNamelError ] = useState(null);
    

    const[ gmail, setgmail ] = useState('');
    const[ gmailError, setgmailError ] = useState(null);

    const[ password, setpassword ] = useState('')
    const[ passwordError, setpasswordError ] = useState(null)

    const[ spinner, setspinner ] = useState(false)
     
  

    const fullnameHandler = event => {

        const enterFullName = sanitizeEmail(event.target.value)
        
        if(enterFullName.length < 51) {

            setfullName(enterFullName);

        }  

    }

    const gmailHandler = event => {
        
        const enterGmail = sanitizeEmail(event.target.value)
        
        if(enterGmail.length < 51) {

            setgmail(enterGmail);

        }    
    }

    const passwordHandler = event => {

        const enterPassword = event.target.value;

        if(enterPassword.length <30) {

            setpassword(enterPassword);
        } 
    }

    const SignupHandler  = () => {

        let valideInputCount = 0;

       

        if( fullName < 1 ) {

            setfullNamelError('fullName is required..')

        }
        else if( fullName.length > 8) {

            setfullNamelError(null);
            valideInputCount = valideInputCount + 1;

        }
        else {

            setfullNamelError('Invalid fullName.')
        }

       
        
        
        if( gmail.length < 1 ) {

            setgmailError('gmail is required..')
        }
        else if( validateEmailAddress(gmail) === 'VALID_EMAIL_ADDRESS') {

            setgmailError(null);
            valideInputCount = valideInputCount + 1;

        } else {

            setgmailError('Invalid email address.')

        }

        if( password < 1 ) {

            setpasswordError('Password is required..')

        }
        else if( password.length > 4) {

            setpasswordError(null);
            valideInputCount = valideInputCount + 1;

        }
        else {

            setpasswordError('Invalid password.')
        }

        if( valideInputCount === 3) {

            setspinner(true)

            const postData = {

                fullName : fullName,

                emailAddress: gmail,

                password: password 
            }

            

        }
        
    }
   
 

    return <React.Fragment>
        
                <CustumInput

                    tittle='Enter FullName.'
                    type="text"
                    placeholder=' Enter Gmail Address.'
                    onChange={ fullnameHandler }
                    value={ fullName }
                    errorMessage={ fullNameError }
                />

                <CustumInput

                    tittle='Enter Password.'
                    type="text"
                    placeholder=' Enter password..'
                    onChange={ gmailHandler }
                    value={ gmail }
                    errorMessage={ gmailError }
                />
                <CustumInput

                    tittle='Enter your password..'
                    type="text"
                    placeholder=' Enter password'
                    onChange={ passwordHandler }
                    value={ password }
                    errorMessage={ passwordError }
                
                />

                <CustBtn 

                    onClick={ SignupHandler }  
                    btnName=' SIGNUP '
                    isClickedBtn={spinner}
                    sendingServer='Logining..'
                />
                    

    </React.Fragment>
}

export default SignupCom;