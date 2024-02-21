import React from "react";
import tw from "twin.macro";
import { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "./Logo.js";
import BackGr from "images/other/back.jpg";   //myself
import Search from "./Search.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}}
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}}`;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image:url(${BackGr});`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-3xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {${tw`inline-block mt-2`}}`;

const partner =() =>{
  alert("برای همکاری با ما رزومه یا اطلاعات خود را به شماره 09109022678 ارسال نمایید ");
}


export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#learn">
        اموزش ها
      </NavLink>
      <NavLink onClick={partner} >
        همکاری با ما
      </NavLink>
      <NavLink href="#suport">
        پشتیبانی
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="#login">
        ورود
      </PrimaryLink>
  </NavLinks>
  ];
  return (
    <>
    <Container id="index">
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
          بیشترین مردم از نظر ارزش، بیشترین آنهاست از نظر دانش
              <br />
              پیامبر اکرم
          </Heading>
          <Search handleSearch={""} />
        </Content>
      </HeroContainer>
    </Container>
    </> 
  );
};