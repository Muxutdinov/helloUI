import React from "react";
import icon from "../assats/icons/icon.png";
import {
  BottonsWrapper,
  Container,
  Name,
  Text,
  VideoButton,
  Img,
  ButtonText,
} from "./IntrooStyle";

const Intro = () => {
  return (
    <Container>
      <Name>
        Award-winning logistics services. Powered by technology, delivered by
        experts.
      </Name>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In est
        repellendus possimus, eaque excepturi quam, itaque, earum maxime eius
        sit cupiditate qui nihil sapiente incidunt sed inventore a atque autem?
      </Text>
      <BottonsWrapper>
        <VideoButton>
          <Img src={icon} />
          <ButtonText>See How Spellon Work</ButtonText>
        </VideoButton>
      </BottonsWrapper>
    </Container>
  );
};

export default Intro;
