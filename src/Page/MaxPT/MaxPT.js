import React, { useState } from 'react';
import CssStyle from './MaxPT.module.css';

import Add from './Com/Add/Add';
import Checkboxpt from './Com/Checkboxpt/Checkboxpt';
import Chekbox from './Com/Chekbox/Chekbox';

const MaxPT = () => {

    return <section className={ CssStyle.Con } >

        <Add/>

        <Checkboxpt/>

        <Chekbox/>

    </section>
}

export default MaxPT;