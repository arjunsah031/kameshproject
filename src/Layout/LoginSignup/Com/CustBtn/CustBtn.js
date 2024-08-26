import React from "react";
import PublicSpinner from "../../../../Component/PublicSpinner/PublicSpinner";
import CssSyle from './CustBtn.module.css';


const CustBtn = props  => {

    let containData = <button onClick={ props.onClick } className={ CssSyle.Btn}> { props.btnName } </button>

    if( props.isClickedBtn) {

        containData = <div className={CssSyle.Loder}>
            <PublicSpinner  width='20px'width = '20px' />
            <div className={ CssSyle.LogintText}> Logining.</div>
        </div>
        
    }

    return <div className={ CssSyle.Con } >

        { containData}
        
    </div>
}

export default CustBtn;