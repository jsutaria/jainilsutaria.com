import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Typing from "react-typing-animation";
import { ReactComponent as Asset } from "../../assets/face-colored.svg";
import PageSection from "../UI/PageSection";

const Face = styled(Asset)`
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
`;

const HeroSection = styled(PageSection)`
  justify-content: space-between;
  font-family: "Shadows Into Light", sans-serif;
  // background-color: #1fc8db;
  // background-image: linear-gradient(
  //   141deg,
  //   #9fb8ad 0%,
  //   #1fc8db 51%,
  //   #2cb5e8 75%
  // );
`;

const Title = styled.div`
  font-size: 8vw;
`;

const Down = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  left: 50vw;
  top: 80vh;
  width: 5vw;
  height: 9vh;
  text-align: center;
  font-size: 10vh;
  transform: rotate(180deg);
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <Main>
        <Typing speed={50} loop={true}>
          <Typing.Delay ms={1500} />
          <Title>Jainil Sutaria</Title>
          <Typing.Backspace count={14} delay={2500} />
        </Typing>
      </Main>
      <Face />
      <Link
        activeClass="active"
        to="error"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <Down>
          <Typing cursor={" "} loop={true}>
            <Typing.Delay ms={400} />^
            <Typing.Backspace count={1} delay={400} />
          </Typing>
        </Down>
      </Link>
    </HeroSection>
  );
}
