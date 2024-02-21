import React from "react";
import Suport from "components/login-suport/Suport";
import Login from "components/login-suport/Login";
import tw from "twin.macro";
import { useState } from "react";
const HeroRow = tw.div`flex flex-col lg:flex-row  items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap mt-0 `;

const LogSup = ({setting}) =>{
  
    return(
        <>
      
    <HeroRow>
    <Login />
    <Suport/>
    </HeroRow>
    </>
    );
}
export default LogSup;