import React, { useState } from "react";
import CssStyle from './FilterAge.module.css';

const FilterAge = props  => {

    const [ state, setState ] = useState(false);

    const selectBtnHandler = () => {
       

        setState( s => !s)

    }

    const selectHandler = event => {

        console.log(event.target.value)

        props.onselectedAge(event.target.value)
        setState( s => !s)
        
    }
    
    return <div className={ CssStyle.Con } >

        <div value={ props.select }  className={ CssStyle.selectCon } onClick={ selectBtnHandler } > {props.select} </div>

            { state && <div className={ CssStyle.optionCon }>
                <option value='2019' onClick={ selectHandler}> 2019 </option>
                <option value='2020' onClick={ selectHandler}> 2020 </option>
                <option value='2021' onClick={ selectHandler}> 2021 </option>
                <option value='2022' onClick={ selectHandler}> 2022 </option>
            </div>}
           
    </div>
}

export default FilterAge;