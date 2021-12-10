import React from "react";
import icon1 from "../assats/img/icon1.png";
import icon2 from "../assats/img/icon2.png";
import icon3 from "../assats/img/icon3.png";
import {
  Container,
  NameTextLink,
  OnlyImg,
  Wrapper,
  Name,
  Text,
  Link,
} from "./DevelopStyle";

const Develop = () => {
  return (
    <Container>
      <Wrapper>
        <NameTextLink>
          <Name>Develop</Name>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            similique eius adipisci delectus magni, dolor nostrum a obcaecati
            laudantium, molestiae corporis deserunt aut id recusandae rem vel.
          </Text>
          <Link>Learn more about spellon</Link>
        </NameTextLink>
        <OnlyImg src={icon1} />
      </Wrapper>
      <Wrapper>
        <OnlyImg src={icon2} />
        <NameTextLink>
          <Name>Build</Name>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            similique eius adipisci delectus magni, dolor nostrum a obcaecati
            laudantium, molestiae corporis deserunt aut id recusandae rem vel.
          </Text>
          <Link>Learn more about spellon</Link>
        </NameTextLink>
      </Wrapper>
      <Wrapper>
        <NameTextLink>
          <Name>Updata</Name>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            similique eius adipisci delectus magni, dolor nostrum a obcaecati
            laudantium, molestiae corporis deserunt aut id recusandae rem vel.
          </Text>
          <Link>Learn more about spellon</Link>
        </NameTextLink>
        <OnlyImg src={icon3} />
      </Wrapper>
    </Container>
  );
};

export default Develop;
