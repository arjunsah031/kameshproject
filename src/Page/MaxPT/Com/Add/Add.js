import React, { useState } from "react";
import CssStyle from './Add.module.css';
import NewAddName from "./NewAddName/NewAddName";
import PersonIteam from "./PersonIteam/PersonIteam";

import { Dummydata } from "./DumyData/DumyData";

const Add = () => {

    const [ iteam, setIteams ] = useState( Dummydata );

    const newPersonDataHandler = newPersonData => {  

        setIteams( previousdata => {

            return [ newPersonData, ...previousdata ]
        } )
    }

    return <section className={ CssStyle.Con } >

        <div className={ CssStyle.Container }> 

                <NewAddName onNewpersonData = { newPersonDataHandler }/>
                <PersonIteam iteams = { iteam }/>
        </div>
    </section>
}

export default Add;