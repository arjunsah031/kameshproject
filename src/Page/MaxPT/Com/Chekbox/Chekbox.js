import React, { useEffect, useState } from "react";
import CssStyle from './Chekbox.module.css';

import { Dummydata } from "./Dummydata/Dummydata";

const Chekbox = props => {

    const topthree = [
        {
             id : 1,
             name : 'india'
        },

        {
            id : 2,
            name : 'nepal'
       },

       
    ]

    const [ users, setUsers ] = useState([]);

    console.log(users)

    useEffect( () => {

        setUsers(topthree)

    }, [])

    const checkboxHandler = e => {

        const { name, checked } = e.target;

        if( name === 'All') {

           const tempdata = users.map( user => {
            return {...user, ischecked : checked}

           })

           setUsers(tempdata)

        }
        else {

            let tempdata = users.map( user => user.name === name ? { ...user, ischecked : checked} : user );
            setUsers(tempdata)

        }

    }

    const checkeddata = users.filter( user => user.ischecked).map( iteam => iteam.name.toLowerCase() );

    console.log(checkeddata)

    if( checkeddata.length) {
        
        const updatedata = Dummydata.filter( user => checkeddata.includes( user.cuisine));

        console.log(updatedata)
    }

    return <section className={ CssStyle.Con } >

        <div className={ CssStyle.ChekboxCon } >

            <div className={ CssStyle.Chekbox } >

                <input 

                    type='checkbox'
                    name="All"
                    onChange={ checkboxHandler }
                    checked={ users.filter( user => user ?.ischecked !== true).length < 1}
                    

                    />
                <label> All  </label>

            </div>

            { users.map( user => {

                return <div key={ user.id } className={ CssStyle.Chekbox }>

                    <input 

                        type='checkbox' 
                        onChange={ checkboxHandler } 
                        name={user.name}
                        checked={ user ?.ischecked || false}

                        />

                    <label> { user.name}  </label>

                </div>
            })}

            

        </div>
         
    </section>
}

export default Chekbox;