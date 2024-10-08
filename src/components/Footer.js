// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #2d3748;
  color: white;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem; /* Añadir espacio entre los componentes de la página y el footer */
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #63b3ed;
    }
  }
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </SocialIcons>
      <InfoText>Contacto: info@luxurycars.com | Tel: +52 55 1234 5678</InfoText>
      <InfoText>
        <a href="/privacy-policy" style={{ color: '#63b3ed' }}>Aviso de privacidad</a>
      </InfoText>
    </FooterContainer>
  );
};

export default Footer;
