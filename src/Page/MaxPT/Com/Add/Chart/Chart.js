import React  from "react";
import CssStyle from './Chart.module.css';
import ChartBar from "./ChartBar/ChartBar";



const Chart = props  => {

    const datapointValue = props.ChartPonit.map( datapoint => datapoint.value);
    
    const totalMax = Math.max(...datapointValue);

   

    
    return <div className={ CssStyle.Con } >

        { props.ChartPonit.map( (data) => {

            return  <ChartBar

                key = { data.lable}
                Lable = {data.lable}
                value = { data.value }
                maxValue = {totalMax}
            
            />

        }) }

       
        

        
    </div>
}

export default Chart;