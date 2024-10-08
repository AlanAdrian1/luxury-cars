import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa"; 

const ButtonContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Menu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 50px;
  left: 0;
  background-color: white;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #333;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <ButtonContainer onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <FaBars size={20} />
      <Menu isOpen={isOpen}>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </ButtonContainer>
  );
};

export default NavigationMenu;
