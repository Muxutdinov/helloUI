import React from "react";
import people1 from "../assats/icons/people1.png";
import people2 from "../assats/icons/people2.png";
import people3 from "../assats/icons/people3.png";
import people4 from "../assats/icons/people4.png";
import bred from "../assats/img/bred.png";

import {
  Card,
  CardsWrapper,
  CardText,
  CardTop,
  Container,
  CreateText,
  Name,
  RightImg,
  Top,
  TopImg,
  TopLeft,
  TopName,
  TopRight,
  TopTitle,
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
        <Card>
          <CardTop>
            <TopLeft>
              <TopImg src={people1} />
              <div>
                <TopName>Bri</TopName>
                <TopTitle>@BriDehlinger</TopTitle>
              </div>
            </TopLeft>
            <TopRight>
              <TopImg src={bred} />
            </TopRight>
          </CardTop>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            excepturi velit eos, veritatis quibusdam voluptates molestiae animi
            quia perspiciatis, aliquam quae similique voluptatem labore rerum
            dolore dolorem voluptatum sint quos, reiciendis nulla minus veniam
            qui.
          </CardText>
        </Card>
        <Card>
          <CardTop>
            <TopLeft>
              <TopImg src={people2} />
              <div>
                <TopName>CarolMcKeon</TopName>
                <TopTitle>@LisaMillterCool</TopTitle>
              </div>
            </TopLeft>
            <TopRight>
              <TopImg src={bred} />
            </TopRight>
          </CardTop>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            excepturi velit eos, veritatis quibusdam voluptates molestiae animi
            quia perspiciatis, aliquam quae similique voluptatem labore rerum
            dolore dolorem voluptatum sint quos, reiciendis nulla minus veniam
            qui.
          </CardText>
        </Card>
        <Card>
          <CardTop>
            <TopLeft>
              <TopImg src={people3} />
              <div>
                <TopName>Bri</TopName>
                <TopTitle>@BriDehlinger</TopTitle>
              </div>
            </TopLeft>
            <TopRight>
              <TopImg src={bred} />
            </TopRight>
          </CardTop>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            excepturi velit eos, veritatis quibusdam voluptates molestiae animi
            quia perspiciatis, aliquam quae similique voluptatem labore rerum
            dolore dolorem voluptatum sint quos, reiciendis nulla minus veniam
            qui.
          </CardText>
        </Card>
      </CardsWrapper>
      <CardsWrapper>
        <Card>
          <CardTop>
            <TopLeft>
              <TopImg src={people4} />
              <div>
                <TopName>Bri</TopName>
                <TopTitle>@BriDehlinger</TopTitle>
              </div>
            </TopLeft>
            <TopRight>
              <TopImg src={bred} />
            </TopRight>
          </CardTop>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            excepturi velit eos, veritatis quibusdam voluptates molestiae animi
            quia perspiciatis, aliquam quae similique voluptatem labore rerum
            dolore dolorem voluptatum sint quos, reiciendis nulla minus veniam
            qui.
          </CardText>
        </Card>
        <Card>
          <CardTop>
            <TopLeft>
              <TopImg src={people1} />
              <div>
                <TopName>Bri</TopName>
                <TopTitle>@BriDehlinger</TopTitle>
              </div>
            </TopLeft>
            <TopRight>
              <TopImg src={bred} />
            </TopRight>
          </CardTop>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            excepturi velit eos, veritatis quibusdam voluptates molestiae animi
            quia perspiciatis, aliquam quae similique voluptatem labore rerum
            dolore dolorem voluptatum sint quos, reiciendis nulla minus veniam
            qui.
          </CardText>
        </Card>
        <Card>
          <CardTop>
            <TopLeft>
              <TopImg src={people2} />
              <div>
                <TopName>Bri</TopName>
                <TopTitle>@BriDehlinger</TopTitle>
              </div>
            </TopLeft>
            <TopRight>
              <TopImg src={bred} />
            </TopRight>
          </CardTop>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            excepturi velit eos, veritatis quibusdam voluptates molestiae animi
            quia perspiciatis, aliquam quae similique voluptatem labore rerum
            dolore dolorem voluptatum sint quos, reiciendis nulla minus veniam
            qui.
          </CardText>
        </Card>
      </CardsWrapper>
    </Container>
  );
};

export default Dojust;
