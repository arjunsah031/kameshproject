import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CheackLoginToken from '../Component/CheackLoginToken/CheackLoginToken';

import Header from '../Layout/Header/Header';
import Main from '../Layout/Main/Main';
import Footer from '../Layout/Footer/Footer';

import Signup from '../Layout/LoginSignup/Signup/Signup';
import Login from '../Layout/LoginSignup/Logn/Logn';

import SideNavigation from '../Layout/SideNavigation/SideNavigation';
import Topup from '../Layout/Topup/Topup';

const Root = () => {


    return (
        <React.Fragment>

            <BrowserRouter>

                <CheackLoginToken/>

                <Header/>
                <Main/>
                <Footer/>

                <Signup/>
                <Login/>

                <SideNavigation/> 

                <Topup/>

            </BrowserRouter>

        </React.Fragment>
    );

}

export default Root;