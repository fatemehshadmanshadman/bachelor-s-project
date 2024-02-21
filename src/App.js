import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/Header.js";
import Footer from "components/footers/Footer.js";
import Cards from "components/Tabs/Cards";
import ContentRender from "components/learn-content/ContentRender";
import LogSup from "components/login-suport/LogSup";
import Panel from "components/panel/Panel";
import { useState } from "react";
import Suport from "components/login-suport/Suport";
import Login from "components/login-suport/Login";
import tw from "twin.macro";
const HeroRow = tw.div`flex flex-col lg:flex-row  items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap mt-0 `;
function App() {
  const [username,setUsername]=useState([]);
  const [dashboard,setDashboard]=useState("none");
  const [buy,setBuy]=useState();
  const [iding,setIding]=useState();
  const [chaptername,setChaptername]=useState();
  var [coursetitle,setCoursetitle]=useState("");
 
  return (
    <>
      <AnimationRevealPage>
        <Header/>
        <HeroRow>
    <Login setting={setUsername}  hideshow={setDashboard}/>
    <Suport/>
    </HeroRow>
        <Panel name={username} hideshow={dashboard} exit={setDashboard} course={buy} chapterofcourse={chaptername} keyword={iding}  />
          <Router>
            <Switch>
              {/* <Route path="/"> */}



                <Cards buyitem={setBuy} chapters={setChaptername} settitle={setCoursetitle} title={coursetitle} setid={setIding}/>




              {/* <Route path="/components/:type/:name"><ContentRender/></Route>
              </Route>    
              <Route path="/Login/"></Route> */}
     
            </Switch>
          </Router>
         
     {/* <LogSup /> */}
     
        <Footer/>
      </AnimationRevealPage>
    </>
  ); 
}
export default App;
