import React , { Component, useState } from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

import logo from "images/other/LOGO.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { Container as ContainerBase } from "components/misc/Layouts";

//const Container = tw(ContainerBase)` bg-primary-100 text-white font-medium flex justify-center -m-1 lg:w-1/2 lg:h-2/12 mt--8 mr--8`;

const Container = tw(ContainerBase)` bg-primary-100 text-white font-medium flex justify-center -m-1 lg:w-1/2 lg:h-2/12 mt--8 mr--8  mx-auto `;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-8 sm:my-6 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/6 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto mt--4`;
const MainContent = tw.div`mt-5 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold `;
const FormContainer = tw.div`w-full flex-1 mt-8 mt--8`;
const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;
const Form = tw.form`mx-auto max-w-xs`;
// const textstyl=tw.p`text-danger`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {${tw`w-6 h-6 -ml-2`}}
  .text {${tw`ml-3`}}`;
 
const Login = ({setting,hideshow}) => {
   let [validEmail,setValidEmail]=useState(false);
  // const [addClass,setAddclass]=useState(false);
  let [validPassword,setValidPassword]=useState(false);
  const send = (e) =>{
    e.preventDefault();
   const username=  prompt('نام خود را وارد کنید');
  
   
   setting(username);
    }
    const  isEmail= (e) => {
      const valueOfEvent=e.target.value;
      const typeOfValue=e.target.type;
     
      if(typeOfValue==='email')
      {
          if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[com]{3,4}$/i.test(valueOfEvent))
           {
            setValidEmail('Your Email Is Invalid!');
            // setAddclass('text-danger');
          }
          else
          {
            setValidEmail(true);          
          }     
      }   
    }
    const formsubmit=(e)=>{     
      e.preventDefault();   
     if(validEmail===false)
     {
       setValidEmail('You\'re Email Is Required!');      
     }
     if(validPassword===false)
     {
       setValidPassword('Please Enter Your Password!');
     }
    
    if(validEmail===true && validPassword===true)
     {
      const username=  prompt('نام خود را وارد کنید');
      setting(username);
      hideshow("inline");
     }    
   }

   const isPassword = (e) => 
   {
     e.preventDefault();
    const valueOfEvent=e.target.value;
    const typeOfValue=e.target.type;
    let caps, small, num, specialSymbol;
    caps = (valueOfEvent.match(/[A-Z]/g) || []).length;
    small = (valueOfEvent.match(/[a-z]/g) || []).length;
    num = (valueOfEvent.match(/[0-9]/g) || []).length;
    specialSymbol = (valueOfEvent.match(/\W/g) || []).length;
    if(valueOfEvent===false){
      setValidPassword('Please Enter Your Password');
    }
    if(typeOfValue==='password')
    {
     
      
        if (caps < 1) {
          setValidPassword('Must Add One UPPERCASE Letter!');
          // setAddclass('text-danger');
          return;
        } else if (small < 1) {
          
          setValidPassword('Must Add One Lowercase Letter!');
          // setAddclass('text-danger');
          return;
        } else if (num < 1) {
        
          setValidPassword('Must Add One Number!');
          // setAddclass('text-danger');
          return;
        } else if (specialSymbol < 1) {
        
          setValidPassword('Must Add One Special Symbol: @$! % * ? & !');
          // setAddclass('text-danger');
          return;
        }
      
         else if(valueOfEvent.length<5)
          {
            setValidPassword('Your Password Must Be At Least 5 Character!')
          }
          else
          {
            setValidPassword(true);
         
          
          }      
    }
    
   }

 const logoLinkUrl = "/",
    headingText = "ورود یا ثبت نام",
    submitButtonText = " ورود ", 
    suport = "#",
    title="",
    war="ایمیل و رمز عبور وارد کنید";  
  return ( 
    <Container id="login">
        <Content>
        
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                    {war}</p>             
              <FormContainer>
                <DividerTextContainer>
                  <DividerText>{title}</DividerText>
                </DividerTextContainer>
                <Form onSubmit={(e)=>formsubmit(e)}>

                  <Input type="email" placeholder="ایمیل" onChange={(e)=>isEmail(e)}/>
                  <p tw="text-red-500">{validEmail}</p>
                  <Input type="password" placeholder="رمز عبور"  onChange={(e)=>isPassword(e)}/>
                  <p tw="text-red-500">{validPassword}</p>
                  <SubmitButton type="submit" href="/">
                    {/*<SubmitButtonIcon className="icon"  href="/"/>*/}
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
        </Content>
      </Container>
   );
}
 
export default Login;
               