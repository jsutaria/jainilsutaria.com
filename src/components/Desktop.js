import React, { Component } from "react";
import PageSection from "./UI/PageSection";
import Aux from "../Util/Aux";
import Error from "./Error";
import Hero from "./Desktop/Hero";

import styled from "styled-components";

const NavBar = () => <div />;

const Main = styled.div`
  background-color: #1fc8db;
  background-image: linear-gradient(
    175deg,
    #9fb8ad 0%,
    #1fc8db 17%,
    #2cb5e8 25%,
    #c33764 100%
  );
`;

class Desktop extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <Main id="container" ref={this.container}>
          <Hero />
          <PageSection id="error" className="page">
            <Error>
              This website is currently under development. Please check back in
              a couple weeks.
            </Error>
          </PageSection>
        </Main>
      </Aux>
    );
  }
}

export default Desktop;
