import React from "react";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Root from "./Root/Root";

import OpenCloseSideNavigtionReduce from './Store/Reducers/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion';
import LoginsignupBoxReducer from './Store/Reducers/LoginSignupBox/LoginSignupBox';
import AuthReducer from './Store/Reducers/Auth/Auth';
import ProfileDetailsReducer from "./Store/Reducers/ProfileSysteam/ProfileSysteam";
import AddtoCartReducer from "./Store/Reducers/AddtoCart/AddtoCart";
import BuyNowProductReducer from "./Store/Reducers/TxnDetails/BuyNowProduct";

const Reducer = combineReducers( {
    
    BuyNowProductReducer : BuyNowProductReducer,
    OpenCloseSideNavigtion : OpenCloseSideNavigtionReduce,
    LoginsignupBox : LoginsignupBoxReducer,
    AuthReducer : AuthReducer,
    ProfileDetails : ProfileDetailsReducer,
    AddtoCartReducer : AddtoCartReducer, 
   
})

const store = createStore( Reducer);


const App = () => {

    return (

            <Provider store = { store}>

                <Root/>

            </Provider>
         
    )
}
export default App;