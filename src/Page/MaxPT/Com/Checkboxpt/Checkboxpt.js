import React, { useState } from "react";
import CssStyle from './Checkboxpt.module.css';

const Checkboxpt = () => {

    const Dummydata = [

        {
            id : 1,
            tittle : 'nice place',
            catagory : 'place',
            cuisine : 'nepal',
            star : '1'
        },
        {
            id : 2,
            tittle : 'amazing.',
            catagory : 'place',
            cuisine : 'india',
            star : '2'
        },
        {
            id : 3,
            tittle : 'fantastic.',
            catagory : 'dish',
            cuisine : 'nepal',
            star : '2'
        },
        {
            id : 4,
            tittle : 'good place',
            catagory : 'dish',
            cuisine : 'india',
            star : '3'
        },
        {
            id : 5,
            tittle : 'beautyfull',
            catagory : 'dish',
            cuisine : 'nepal',
            star : '3'
        },
        {
            id : 6,
            tittle : 'good place',
            catagory : 'dish',
            cuisine : 'india',
            star : '2'
        },
        {
            id : 7,
            tittle : 'good place',
            catagory : 'place',
            cuisine : 'nepal',
            star : '4'
        },

    ]

    const [ option, setOption ] = useState( [

        {
            id : 1, 
            checked : false, 
            label : 'india'
        },

        {
            id : 2, 
            checked : false,  
            label : 'nepal'
        }
       
    ]);

    const checkboxHandler = id => {

        const data = option.map(iteam => iteam.id === id ?{ ...iteam, checked: !iteam.checked} : iteam)

        setOption(data)

    } 

    const checkeddata = option.filter( user => user.checked).map( user => user.label.toLowerCase());

    
    if( checkeddata.length) {

        const updatedata = Dummydata.filter( user => checkeddata.includes(user.cuisine))

       console.log(updatedata)

    }


    return <section className={ CssStyle.Con }>

        <div className={ CssStyle.ChekboxCon }>

            { option.map( user =><div key={ user.id } className={ CssStyle.Chekbox }>

                    <input 

                        type='checkbox' 
                        onChange={ () => checkboxHandler(user.id) } 
                        name={user.name}
                        checked={ user.checked}
                    />

                    <label> { user.label}  </label>

                </div> 
            )}

        </div>

    </section>
}

export default Checkboxpt;