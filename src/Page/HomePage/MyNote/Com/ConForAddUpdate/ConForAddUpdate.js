import React from "react";
import reactDom from "react-dom";
import CssStyle from './ConForAddUpdate.module.css';

const ConForAddUpdate = props  => {

    const styles = [CssStyle.Con, props.show ? CssStyle.openModel : CssStyle.closeModel ]
    
    

    let formbox = null;

    if(props.BoxType === 'FORM_BOX') {

        formbox= <div className={ CssStyle.desFormTypeCon } >

                <div className={ CssStyle.desTiittle } > { props.BoxName} </div>
                <button onClick={ props.onClick } className={ CssStyle.closeBtn } > { props.closeBtn} </button>
            
        </div>
    }

    const contaidata =  <React.Fragment>

        <div  className={ CssStyle.Layer } ></div>

        <div className={ styles.join(' ') } style={ props.Mystyle ? props.Mystyle: {} } > 

            { formbox}
                
            <div className={ CssStyle.Children}> {props.children } </div>


        </div>

    </React.Fragment>

    return reactDom.createPortal( contaidata,document.getElementById('models') );

}

export default ConForAddUpdate;