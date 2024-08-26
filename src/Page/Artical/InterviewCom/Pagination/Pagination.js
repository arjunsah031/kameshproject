import React, { useEffect } from "react";
import CssStyle from './Pagination.module.css';
import axios from "axios";
import { useState } from "react";

const Pagination =  props => {
 
    const [ Iteams, setIteams ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ Loding, setLoading ] = useState(false)

    console.log(page)
 
    useEffect( () => {

        const url = 'https://dummyjson.com/products?limit=100';

        axios.get(url)
        .then(response => {
            setLoading(true)
            setIteams(response.data.products)
        })
        .catch(error => {
    
            console.error('Error fetching data:', error);
        });

    }, []);

    const pageHandler = selectedPage => {

        if(
            selectedPage >= 1 &&
            selectedPage <= Iteams.length/10 &&
            selectedPage !== page 

            
        ) {
            setPage(selectedPage)
           
        }  

    }
    const nextHandler = () => {
       
            setPage( page + 1 )
    
    }

    const backHandler = () => {
        setPage(page-1)
    }

    let containdata;

    containdata = <div className={ CssStyle.Loading}>
        loding
    </div>

    if( Loding) {

        containdata = <React.Fragment>
                        <div className={ CssStyle.ProductControler}>

                            { Iteams.slice(page*10-10 ,page*10).map( ( el) => {

                                    return <div className={CssStyle.productCon}>

                                            <div className={CssStyle.ImageRap }>
                                                <title> {el.title} </title>
                                                <img className={ CssStyle.Image} src={ el.images[0]}/>
                                                <div> { el.category}</div>
                                            </div>
                                        </div>
                                }) }

                            </div>

                                <div className={ CssStyle.PageControler}>
                                <span className={(page <= 1)? CssStyle.BackBtndecable  : '' } onClick={backHandler}>back</span >

                                { [...Array(Iteams.length/10)].map( (el, i) => {
                                    return <span className={ (page === i+1) ? CssStyle.activeStyle  : '' } onClick={ () => pageHandler(i+1)} > {i+1} </span>
                                })}

                                <span className={(page === Iteams.length/10)? CssStyle.BackBtndecable  : '' } onClick={nextHandler } >Next</span>
                        </div>


                    </React.Fragment>
    }



    return <section className={ CssStyle.Con}>

       { containdata }


    </section>


}

export default Pagination;
