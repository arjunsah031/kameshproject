import React from "react";
import CssStyle from './CusEmi.module.css';
import { useState } from "react";
import { tenureData } from "../Emicalculater/Utils/Constant";

const denerdata = [12, 24, 36, 48]

const CusEmi = props => {

    const [ cost, setCost ] = useState(0)
    const [ intrestRate, setInterestRate ] = useState(10)
    const [ pfee, setPfee ] = useState(1)
    const [ downpayment, setDownPayment ] = useState(0)
    const [ tendure, setTendure ] = useState(12);

    // EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]

    const actualP = (cost-downpayment)-(cost-downpayment) * pfee/100

    const P = actualP;
    const R = intrestRate/100;
    const N = tendure/12;

    const EMI = P * R * ( 1 + R ) ** N /(( 1 + R) ** N  -1);
    const permonthEmi = EMI/12
   

    const dateHandler = (i) => {
        setTendure(i)
    }

    
    return <section className={ CssStyle.Con } >
        
       
            <div className={ CssStyle.Tittle} > EMI CALCULATER </div>

            <div> 
                <span> total cost of assets</span>
                <input 
                    type = 'Number'
                    placeholder="inter prinple"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    
                 />
            </div>

            <div> 
                <span> intersate rate % </span>
                <input 
                    type = 'Number'
                    placeholder="intersate rate"
                    value={intrestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    
                 />
            </div>

            <div> 
                <span> Processing fee % </span>
                <input 
                    type = 'Number'
                    placeholder="inter prinple"
                    value={pfee}
                    onChange={(e) => setPfee(e.target.value)}
                    
                 />
            </div>

            <div> 
                <span  > Down Payment </span>
                <input 
                    type = 'range'
                    min={0}
                    max={cost}
                    value={downpayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    
                 />
                 <div className={ CssStyle.Slindershow} >
                    <label>0</label>
                    <label>{downpayment }</label>
                    <label>100</label>
                 </div>
            </div>

            <div> 
                <span  > EMI PER MONTH </span> <br/>
                <span  >{permonthEmi} </span>
                <input 
                    type='range'
                    min={12}
                    max={64}
                    value={tendure}
                    onChange={(e) => setTendure(e.target.value)}
                    
                 />

            </div>

            <div className={ CssStyle.Slindershow} >

                { tenureData.map( (el, i) => {

                    return <label onClick={  (id) => dateHandler(el)} > { el } </label>
                })}

            </div>
        

    </section>
}

export default CusEmi;