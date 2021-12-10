import React from "react";
import {
  Card,
  CardsWrapper,
  Container,
  CreateText,
  Name,
  Top,
} from "./DojustStyle";

const Dojust = () => {
  return (
    <Container>
      <Top>
        <CreateText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A velit
          inventore atque rerum maxime voluptas?
        </CreateText>
        <Name>Don't just take our word for it</Name>
      </Top>
      <CardsWrapper>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardsWrapper>
      <CardsWrapper>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardsWrapper>
    </Container>
  );
};

export default Dojust;
