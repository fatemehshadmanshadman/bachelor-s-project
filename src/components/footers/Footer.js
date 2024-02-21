import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Logo from "images/other/LOGO.png";
//import LogoImage from "../../images/logo.svg";

import { ReactComponent as TelegramIcon } from "../../images/icon/telegram-icon.svg";
import { ReactComponent as WhatsappIcon } from "../../images/icon/whatsapp-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../../images/icon/facebook-icon.svg";
//import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
//import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/blob/svg-decorator-blob-9.svg"; //hobab

//css
const Container = tw.div`relative bg-primary-400 text-gray-100 -mb-8 -mx-8 px-8 mt-5`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-[50%] left-0 w-80 h-80 transform -translate-x-48 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-80 translate-y-48 text-primary-700 opacity-25`;

const FiveColumns = tw.div`max-w-screen-xl mx-auto py-5 lg:py-5 flex flex-wrap justify-between relative z-10`;

const Column = tw.div`md:w-1/5 md:text-right`;
const WideColumn = tw(Column)`text-center md:text-right w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-800`;

const CompanyDescription = tw.p`mt-4  font-medium text-sm mx-auto md:mx-0 md:mr-4 `; //max-w-xs خط جدید 

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}  }`;

const partner = () => {
  alert("برای همکاری با ما رزومه یا اطلاعات خود را به شماره 09109022678 ارسال نمایید ");
}

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <a href="/">
            <LogoContainer>
              <LogoImg src={Logo} />
              <LogoText>RAYA</LogoText>
            </LogoContainer>
          </a>
          <CompanyDescription>
            کلیه حقوق مادی و معنوی اثر نزد رایا کامپیوتر محفوظ است.
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://t.me/fatemeh_shi_99">
              <TelegramIcon />
            </SocialLink>
            <SocialLink href="https://whatsapp.com/dl/">
              <WhatsappIcon />
            </SocialLink>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/invites/contact/?i=77r4lnalpr7w&utm_content=mneic1u">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>دسترسی کوتاه</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/">صفحه اصلی</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#login">ورود</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#learn">اموزش ها</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#suport">پشتیبانی</Link>
            </LinkListItem>
            <LinkListItem>
              <Link onClick={partner}>همکاری با ما</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>دسترسی سایت</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">آموزش ها</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">مدرسین</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">درباره ما</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">ثبت نام</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
