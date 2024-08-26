import React from "react";

import HeacderContainer from "./HeacderContainer/HeacderContainer";
import Logo from '../Header/Logo/Logo';

import Toggle from "./Toggle/Toggle";
import Navigation from "./Navigation/Navigation";


const Header = () => {


    return <HeacderContainer>

        <Toggle/>
        <Logo/>
       <Navigation/>
        
    </HeacderContainer>
}

export default Header;