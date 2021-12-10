import React from "react";
import { Button, CenterItem, Container, Sign, Title, Wrapper } from "./NavbarStyle";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>HelloUI</Title>
      </Wrapper>
      <Wrapper>
          <CenterItem>Docs</CenterItem>
          <CenterItem>Tools</CenterItem>
          <CenterItem>Freatures</CenterItem>
          <CenterItem>Pricing</CenterItem>
          <CenterItem>Jobs</CenterItem>
      </Wrapper>
      <Wrapper>
         <Sign>Sign in</Sign>
         <Button>Try for free</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;