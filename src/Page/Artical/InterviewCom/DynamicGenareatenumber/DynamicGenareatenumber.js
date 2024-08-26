import React, { useState } from 'react';
import CssStyle from './DynamicGenareatenumber.module.css'


const DynamicGenareatenumber = () => {
  const [ password, setPassword] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ range, setRange ] = useState(2);
  const [ checked, setChecked ] = useState([false]);
  
  const generateRandomNumber = () => {

    let charset = "abcdefghiqsghighiklmnop",

    
      generatedPassword = "";


    // if (checked === false) {
    //   setErrorMessage("Select at least one option.");
    //   setPassword("");
    //   return;
    // }

    // checked.forEach((option) => {
    //   switch (option.id) {
    //     case "hello":
    //       charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //       break;
    //     default:
    //       break;
    //   }
    // });

    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * 3);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    
  
    
  };


  return <div className={ CssStyle.Con}>

  <div className={ CssStyle.Box}>

    <div>
        <div className={ CssStyle.passwordCon}>
          <span>{password}</span>
          <span>copy</span>
        </div>
        <div className={ CssStyle.CracterLenth}>
          <span>Charecter length</span>
          <span>{ range }</span>
        </div>
    </div>

    <div>
      <input
        className={ CssStyle.Range}
        type='range'
        min={4}
        max={20} 
        value={range}
        onChange={ (e) => setRange(e.target.value)} 
        />
    </div>

    <div>

        <div>
          <input id='hello' onClick={ () => setChecked(!checked)} type='checkbox' checked={checked} />
          <span> includes uperlatter </span>
        </div>
        {/* <div>
          <input type='checkbox'/>
          <span> include symbles </span>
        </div> */}

    </div>

    <div> 
      <span> {errorMessage} </span>
    </div>

    <div className={ CssStyle.BtnCon }>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
    
  </div>

</div>

  
}
export default DynamicGenareatenumber;
