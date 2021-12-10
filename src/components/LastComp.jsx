import React from "react";
import {
  Container,
  FirstButton,
  FirstInput,
  FirstInputWrapper,
  FirstName,
  FirstWrapper,
  LeftText,
  LeftTitle,
  RightTitle,
  SecondLeft,
  SecondRight,
  SecondRightWrap,
  SecondWrapper,
} from "./LastCompStyle";

const LastComp = () => {
  return (
    <Container>
      <FirstWrapper>
        <FirstName>It's easy to get started. Start now.</FirstName>
        <FirstInputWrapper>
          <FirstInput placeholder="Enter your email"></FirstInput>
          <FirstButton>Get Started</FirstButton>
        </FirstInputWrapper>
      </FirstWrapper>
      <SecondWrapper>
        <SecondLeft>
          <LeftTitle>Spellon</LeftTitle>
          <LeftText>Nort West, South New Work, United State</LeftText>
          <LeftText>+1 234-345-4560</LeftText>
          <LeftText>Info@example.com</LeftText>
        </SecondLeft>
        <SecondRight>
          <SecondRightWrap>
            <RightTitle>Resourses</RightTitle>
            <LeftText>Docs</LeftText>
            <LeftText>Forums</LeftText>
            <LeftText>Jobs</LeftText>
            <LeftText>Join Discord</LeftText>
            <LeftText>Consultants</LeftText>
          </SecondRightWrap>
          <SecondRightWrap>
            <RightTitle>Campany</RightTitle>
            <LeftText>Docs</LeftText>
            <LeftText>Forums</LeftText>
            <LeftText>Jobs</LeftText>
            <LeftText>Join Discord</LeftText>
            <LeftText>Consultants</LeftText>
          </SecondRightWrap>
          <SecondRightWrap>
            <RightTitle>Legal</RightTitle>
            <LeftText>Docs</LeftText>
            <LeftText>Forums</LeftText>
            <LeftText>Jobs</LeftText>
            <LeftText>Join Discord</LeftText>
            <LeftText>Consultants</LeftText>
          </SecondRightWrap>
        </SecondRight>
      </SecondWrapper>
    </Container>
  );
};

export default LastComp;
