import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
//import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/blob/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/blob/svg-decorator-blob-7.svg";
import {cards} from "./ICDLCards";
import ICDLCards from "./ICDLCards";
import {ProgramCards} from "./ICDLCards";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,UncontrolledDropdown
} from 'reactstrap';
import PropTypes from 'prop-types';

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row mt--5`;
const Header = tw(SectionHeading)``;
const TabContent = tw(motion.div)`mt-1 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {${tw`bg-gray-300 text-gray-700`}}${props => props.active && tw`bg-primary-500! text-gray-100!`}}`;
const Container =tw(ContainerBase)` mb--10 `;
const CardContainer = tw.div`mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 lg:h-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-300 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0 lg:h-1/3`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-40 xl:h-40 bg-center bg-cover relative rounded-t`}`;
const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
 ${tw`absolute inset-0 flex justify-center items-center`}`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-base font-semibold group-hover:text-primary-500`;
const CardContent = tw.p` text-sm font-medium text-gray-600`;
const CardPrice = tw.p` text-base font-bold`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}`;
 
 
  export default ({
  heading = "آموزش ها",
  tabs = {
    "ICDL": ICDLCards(),
    "برنامه نویسی": ProgramCards(),
    //Desserts: getRandomCards()
  },buyitem,chapters,title,settitle,setid

}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const [addcourse,setAddcourse]=useState([]);
  const [hideandshow,setHideAndShow]=useState('none');
  // const iding=[ {id: 0, title: 'آموزش ویندوز 10'},{id:1, title: 'آموزش اینترنت'},{id: 2, title: 'آموزش پاور پوینت'},
  // {id: 3, title: 'آموزش اکسل'},{id: 4, title: 'آموزش اکسس'},{id: 5, title: 'آموزش ورد'}];
  const [allcourse,setAllcourse]=useState([]);
  const [chapterofCourse,setChapterofCourse]=useState();
    useEffect(()=>{
      // fetch('http://localhost:8000/courses').then((res) => res.json())
  //  .then((data) => {
  //    console.log('data added');
  //      console.log(data);
      
   
  //      setAllcourse(data.map((item,index)=>{
       

       
  //         // return(<div key={index}><h1>{item.title}</h1><p >{item.chapter.map(chaptername=>{return(<div key={index}><h4>{chaptername.name}</h4><p>{chaptername.about}</p></div>)})}</p></div>)
  //     //  const a=item.chapter.map(chaptername=>{return(<p>{chaptername.name}</p>)}).filter(bytitle=>{item.title===coursetitle});
       
  //   if(item.title==title){  return(<div key={index}><h1>{item.title}</h1><p  key={index}>{item.chapter.map(chaptername=>{return(<div key={index}><h4  key={index}>{chaptername.name}</h4><p  key={index}>{chaptername.about}</p></div>)})}</p></div>)
  // }else{return null}
  //  }))
  
  //   }).catch((err) => {
  //     console.log(err.message);
  //     console.log('step2');
  //   });
   },[title]);
   const addingCourse=(e)=>{
    fetch('http://localhost:8001/courses').then((res) => res.json())
    .then((data) => {
      console.log('data added');
        console.log(data);
       
    
        chapters(data.map((item,index)=>{
        
 
        
           // return(<div key={index}><h1>{item.title}</h1><p >{item.chapter.map(chaptername=>{return(<div key={index}><h4>{chaptername.name}</h4><p>{chaptername.about}</p></div>)})}</p></div>)
       //  const a=item.chapter.map(chaptername=>{return(<p>{chaptername.name}</p>)}).filter(bytitle=>{item.title===coursetitle});
        
     if(item.title==e){  return(<div key={index}><h1>{item.title}</h1><p  key={index}>{item.chapter.map(chaptername=>{return(<div key={index}><h4  key={index}>{chaptername.name}</h4><p  key={index}>{chaptername.about}</p></div>)})}</p></div>)
   }else{return null}
    }))
   
     }).catch((err) => {
       console.log(err.message);
       console.log('step2');
     });
    
   }
  const buyCourse=(e)=>{
 
  addcourse.push(e);
  
  settitle(e);

    // chapters(allcourse);
  console.log(title);
 
const adding=addcourse.map((item) => {
   return(
   <div className="text-decoration-none"onClick={(e)=>addingCourse(item)}>
   
  
  {item}
  

  
   <hr tw="border-b-2 border-primary-500 w-72 mx-5 lg:w-48 "/>
 
   </div>)
    
      
    
   
   
  });
 
     buyitem(adding);
  
    
  }

  
  
  return (
    <Container id="learn">
      <ContentWithPaddingXl >
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >

            {tabs[tabKey].map((con, index) => (
              <CardContainer key={index}  >
                <Card  href={con.url} initial="rest" whileHover="hover" animate="rest" >
                  <CardImageContainer imageSrc={con.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton onClick={ (e)=>buyCourse(con.title)}>Buy Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{con.title}</CardTitle>
                    <CardContent>{con.content}</CardContent>
                    <CardPrice>{con.price}</CardPrice>
                  </CardText>
                </Card>
                

                    

              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
     
    
      {allcourse}
    </Container>
  );
};
