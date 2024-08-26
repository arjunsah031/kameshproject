import React, { useState } from "react";
import CssStyle from './About.module.css';
import AfterClick from "./AfterClick/AfterClick";
import BeforClick from "./BeforClick/BeforClick";

const About = () => {

    window.scrollTo(0, 0);
    document.title = 'About - PersonalNotebook';

    const [ state, setState ] = useState(false)

    const readmoreHandler = e => {

        setState( true)

    }

    return<section className={ CssStyle.Con }>

      { !state &&  <BeforClick onClick={ readmoreHandler }/>}

        { state && <AfterClick/>}

       
        
    </section>
}

export default About;