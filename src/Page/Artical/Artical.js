import React from "react";
import CssStyle from './Artical.module.css';
import Articalimage from "./Articalimage/Articalimage";
import First from "./InterviewCom/First/First";
import Pagination from "./InterviewCom/Pagination/Pagination";
import EmiCalculator from "./InterviewCom/Emicalculater/Emicalculater";
import CusEmi from "./InterviewCom/CusEmi/CusEmi";
import DynamicGenareatenumber from "./InterviewCom/DynamicGenareatenumber/DynamicGenareatenumber";

const Artical = () => {

    return <section className={ CssStyle.Con }>

            
            <div className={ CssStyle.interviewCon }>

                <DynamicGenareatenumber/>

                <Pagination/>
                <Articalimage/>
                <CusEmi/>
                <EmiCalculator/>
                <First/>
                

            </div>

            
  
    </section>
}

export default Artical;