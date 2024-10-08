import React from 'react';
import styled from 'styled-components';

const Message = styled.h1`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin: 2rem 0;
`;

const WelcomeMessage = ({ children }) => {
  return <Message>{children}</Message>;
};

export default WelcomeMessage;
