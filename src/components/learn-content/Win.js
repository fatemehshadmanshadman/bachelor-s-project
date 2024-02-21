import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import SingleCol from "./Power";

const FAQSContainer = tw.dl`mt-0 max-w-full relative`;
const FAQ = tw.div`cursor-pointer select-none mt--5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`${tw`ml-2 transition duration-300`}svg {${tw`w-6 h-6`}  }`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
      id="win",
      com="nnhb",
      title = "اموزش ویندوز",
      describe="اموزش ویندوز 10 20 ساعت آموزشی",

      card=[
        {
        com:"fdfde",
        title : "ddvdv",
        describe:"dvdvd",
        }
      ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id={id}>
      <ContentWithPaddingXl>
          <FAQSContainer>
            {card.map((card,index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);}}
                className="group"
              >
                <Question>
                  <QuestionText>{title}</QuestionText>
                  <QuestionToggleIcon>
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer>
                  {describe}
                </Answer>
                {com}
              </FAQ>
            ))}
          </FAQSContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
