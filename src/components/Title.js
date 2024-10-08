// src/components/Title.js
import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #1a202c;
`;

const Title = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};

export default Title;
