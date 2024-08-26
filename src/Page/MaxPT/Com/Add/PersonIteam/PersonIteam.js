import React, { useEffect, useState } from "react";
import CssStyle from './PersonIteam.module.css';

import Card from "./Card/Card";
import Iteams from "./Iteams/Iteams";
import FilterAge from "../FilterAge/FilterAge";
import Chart from "../Chart/Chart";
import ChartBarData from "../Chart/ChartBarData/ChartBarData";



const PersonIteam = props => {

    const [ filterAges, setFilterAges ] = useState('2020');
    
    const iteam = props.iteams;

    const filterAgeHandler = filterdata => {

        setFilterAges(filterdata)
    }

    const filterdata = iteam.filter( filters => {

        return filters.Date.getFullYear().toString() === filterAges;    
    }); 

    console.log(filterdata)

    return <div className={ CssStyle.Con }>

        <Card>

            <FilterAge select={ filterAges }  onselectedAge = { filterAgeHandler }/>

            <ChartBarData persondata = { filterdata }/>

            { filterdata.map( ( iteam) => {

                return <Iteams

                    key = { iteam.id}
                    Name={  iteam.Name }
                    Date= { iteam.Date}
                    Amount = { iteam.Amount }
            
            />


            })}

        </Card>
        
    </div>

}

export default PersonIteam;