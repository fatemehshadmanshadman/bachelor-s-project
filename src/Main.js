import React,{useState} from "react";
import Header from "components/headers/Header.js";
import Footer from "components/footers/Footer.js";
import Cards from "components/Tabs/Cards";
import Render from "components/learn-content/Render";
import Panel from "components/panel/Panel";

export default() =>{

    return(
        <>
        <Cards/>
        <Render/>
        </>
    )
}
