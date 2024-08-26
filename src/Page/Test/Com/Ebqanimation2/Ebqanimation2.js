import React from 'react'
import CssStyle from './Ebqanimation2.module.css';
import RootofEbq from '../../../../Assts/Icon/rootOfEbq.png'

const Ebqanimation2 = () => {

    

    return <div className={ CssStyle.Con }>

        <div className={ CssStyle.CirculeCon }>

            <div className={ CssStyle.RootofebqCon }>
                <img src={ RootofEbq } alt='Ebqsquareicond' />
                <span> EBQ  </span>
            </div>

        </div>

        <div className={ CssStyle.SecCirculeCon }>

            <div className={ CssStyle.SecRootofebqCon }>

                <div className={ CssStyle.MovableDiv}>

                    <img src={ RootofEbq } alt='Ebqsquareicond' />
                    
                </div>

                <span className={ CssStyle.EbqText}>EBQ</span>
               
            </div>

        </div>

    </div>
}

export default Ebqanimation2;