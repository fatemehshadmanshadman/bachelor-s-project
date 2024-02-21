import React from "react";
import { useParams } from "react-router-dom";
import Power from "./Power";
import Master from "./Win";

export const components = {
    cards:{
        Power:{
            component:Power,
            url:"/components/cards/Power",
            name:"Power"
        },
        Win:{
            component:Master,
            url:"/components/cards/Win",
            name:"Win"
        }
    }
}
export default () =>{
    const { type,subtype, name } = useParams()   
  try {
    let Component = null;
    if(type === "" && subtype) {
      Component= components[type][subtype][name].component
      return  <Component id="com"/>
    }
    else
    Component= components[type][name].component
    if(Component)
      return <Component id="com"/>
    throw new Error("Component Not Foundhhhhhhhh")
  }
  catch (e) {
    console.log(e)
    return <div id="com">Error: Component Not Found!!!!!!!!</div>
  }
}