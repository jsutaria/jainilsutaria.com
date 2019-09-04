import React from "react";
import styled from "styled-components";
import { FaHammer } from "react-icons/fa";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  height: 100vh;
`;

const ErrorDiv = styled.div`
  width: 350px;
  text-align: center;
`;

const Error = props => (
  <ErrorWrapper>
    <ErrorDiv>{props.children}</ErrorDiv>
    <h1>
      <FaHammer />
    </h1>
  </ErrorWrapper>
);

export default Error;
