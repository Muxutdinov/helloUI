import React from "react";
import {
  BottonsWrapper,
  Container,
  Name,
  Text,
  TryButton,
  VideoButton,
} from "./IntroStyle";

const Intro = () => {
  return (
    <Container>
      <Name>Grow up your sells with us.</Name>
      <Text>
        Build one project that runs natively on all your term now users' devices
        to turn for that you can do.
      </Text>
      <BottonsWrapper>
        <TryButton>Try for free</TryButton>
        <VideoButton>Discover in Video</VideoButton>
      </BottonsWrapper>
    </Container>
  );
};

export default Intro;
