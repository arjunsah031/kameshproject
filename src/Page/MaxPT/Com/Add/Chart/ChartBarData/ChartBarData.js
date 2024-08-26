import React from "react"
import Chart from "../Chart"

const ChartBarData = props  => {

    const ChartBarDummydata = [

        { id :1, value : 0, lable : 'JAN'},
        { id :2, value : 0, lable : 'FEB'},
        { id :3, value : 0, lable : 'MAR'},
        { id :4, value : 0, lable : 'APL'},
        { id :5, value : 0, lable : 'MAY'},
        { id :6, value : 0, lable : 'JUN'},
        { id :7, value : 0, lable : 'JULY'},
        { id :8, value : 0, lable : 'AUG'},
        { id :9, value : 0, lable : 'SEP'},
        { id :10, value : 0, lable : 'OC'},
        { id :11, value : 0, lable : 'NOV'},
        { id :12, value : 0, lable : 'DE'},
    
    
    ];

    for(  let data of props.persondata) {
        const GetMonthofpersondata  =  data.Date.getMonth();
        ChartBarDummydata[GetMonthofpersondata].value +=  data.Amount;

        
    }

    return <Chart ChartPonit={ ChartBarDummydata } />

}
export default ChartBarData;

