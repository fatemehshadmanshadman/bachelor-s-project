import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-0 max-w-full relative`;
const FAQ = tw.div`cursor-pointer select-none mt--5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}  }`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  power = [
    {
        title:" فصل اول ",
        description :<p>
        نرم افزار پاورپوینت برای ساخت ارائه‌های متنی-بصری طراحی شده است. به کمک پاورپوینت می‌توانید اسلایدهای برای ارائه‌های خود تهیه کنید که شامل متن، تصویر، ویدئو، جدول، نمودار، صدا و … باشد.
        معرفی اصلاحات مهم و پایه در پاورپوینت
اصلاحات پایه‌ای پاورپوینت اولین چیزی است که باید به خوبی آنها را یاد بگیرید زیرا در طول آموزش پاورپوینت از مبتدی تا پیشرفته این اصلاحات تکرار خواهند شد. پس بهتر است توجه ویژه‌ای به یادگیری این قسمت داشته باشید.

<b>اسلایدشو </b>
اسلایدشو در واقع معادل کلمه ارئه است. پس در ادامه مقاله اگر با کلمه اسلایدشو مواجه شدید بدانید منظور همان ارائه یا پرزنتیشن است. در واقع اسلایدشو و ارائه به سندی ساخته شده در پاورپوینت نیز گفته می‌شود.

<b>اسلاید </b>
هر ارائه یا اسلایدشو ساخته شده در پاورپوینت شامل چندین اسلاید است. اسلایدها هر کدام یک صفحه هستند که به سند خود اضافه کرده و پشت هم قرار می‌گیرند.

<b>انیمیشن </b>
انیمیشن‌ها امکان متحرک‌سازی اجزا و عناصر اسلاید را می‌دهند. در واقع انیمیشن‌ها جلوه‌های بصری هستند که به زیبایی و جلوه ارائه شما اضافه خواهند کرد.

<b>ترنزیشن </b>
ترنزیشن یا transition معنای جا به جایی می‌دهد. در واقع ترنزیشن نیز یک جلوه بصری است. البته این جلوه فقط وقتی بین اسلایدها جا به جا می‌شوید دیده خواهد شد. به کمک این ویژگی می‌توانید نظر حضار را به ارائه جلب کنید.
        </p>,
        video :""
    },
    {
      title:" فصل دوم ",
      description :<p>معرفی زبانه‌های پاورپوینت
      مانند بسیاری از نرم افزارهای دیگر پاورپوینت نیز زبانه‌های مختلفی دارد که در هر کدام از این زبانه‌ها امکانات مختلفی وجود دارد و شما می‌توانید به آنها دسترسی داشته باشید. امکان شخصی سازی این تب‌ها نیز وجود دارد و می‌توانید برخی ویژگی‌ها را حذف یا اضافه کنید.
      
      در ادامه به امکاناتی که در هر یک از تب‌ها قرار دارد اشاره می‌کنیم.
      
      تب های پاورپوینت
      File 
      
      در این تب می‌توانید اسلایدشو جدید بسازید. اسلایدشو خود را را ذخیره کرده یا چاپ و اشتراک گذاری کنید.
      
      Home
      
      در این بخش می‌توانید فونت، اندازه فونت، پاراگراف‌ها، نقاشی‌ها و … اسلایدها را مدیریت کرد.
      
      Insert
      
      به کمک این زیانه می‌توانید لینک‌ها، تصاویر، نمودارها، جدول‌ها، متن و رسانه و … را به اسلایدهای خود اضافه کنید.
      
      Design
      
      همانطور که از نام این زبانه مشخص است انتخاب قالب، طراحی و سفارشی سازی اسلایدها از طریق امکانات این تب انجام می‌شود.
      
      Transitions
      
      این بخش برای اضافه کردن ترنزیشن ها به اسلایدها و همچنین داشتن پیش نمایشی از ارائه استفاده می‌شود.
      
      Animations
      
      در این تب می‌توانید انیمیشن‌ها را انتخاب کرده یا ویرایش کنید. سپس پیش نمایشی از آنها داشته باشید. به طور کلی این تب برای مدیریت تب‌ها به کار می‌رود.
      
      Slide show
      
      برای ایجاد یک اسلایدشو یا شروع آن و همچنین انتخاب نمایشگر از این بخش استفاده می‌شود.
      
      Review
      
      این تب برای بازخوانی، دیدگاه‌ها و مدیریت دسترسی و … مورد استفاده قرار می‌گیرد.
      
      view
      
      تمام موارد مربوط به نمایش مانند انتخاب پنجره، بزرگنمایی، کوچک نمایی، انتخاب رنگ و … از طریق این زبانه صورت می‌گیرد.</p>,
      video :""
  },
  {
    title:" فصل سوم ",
    description :"",
    video :""
}
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
          <FAQSContainer>
            {power.map((p, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{p.title}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {p.description}
                  {p.video}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
