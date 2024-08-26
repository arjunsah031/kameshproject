import React, { useEffect } from "react";
import CssStyle from './Main.module.css';

import { Routes, Route, useNavigate, } from 'react-router-dom';

import PageNotFound from "../../Page/PageNotFound/PageNotFound";
import HomePage from "../../Page/HomePage/HomePage";
import Test from "../../Page/Test/Test";
import Advacept from "../../Page/Advacept/Advacept";
import MaxPT from "../../Page/MaxPT/MaxPT";
import Price from "../../Page/Price/Price";
import About from "../../Page/About/About";
import Contact from "../../Page/Contact/Contact";
import Blog from "../../Page/Blog/Blog";
import Artical from "../../Page/Artical/Artical";
import Cart from "../../Page/Cart/Cart";


const Main = () => {

   

    const navigate = useNavigate()

    return <main className={ CssStyle.Con } >
            
            <Routes>
                    {/* foter page */}
                <Route  path="/about" element={ <About/> }/>
                <Route  path="/contact" element={ <Contact/>}/>
                <Route  path="/blog" element={ <Blog/>}/>
                <Route  path="/articals" element={ <Artical/>}/>


                    {/* header page */}
                <Route  path="/cart" element={ <Cart/>}/>
                <Route  path="/prices" element={ <Price/>}/>
                <Route  path="/add" element={ <MaxPT/>}/>

                <Route  path="/test" element={ <Test/> } />
                <Route  path="/advancept" element={ <Advacept/>}/>


                <Route  path="/" element={ <HomePage/> } />

                <Route path="/*" element={ <PageNotFound/> } />

                

            </Routes>

    </main>
}

export default Main;