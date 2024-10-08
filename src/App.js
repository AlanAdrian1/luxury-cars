// src/App.js
import React from "react";
import styled from "styled-components";
import CarGrid from "./components/CarGrid";
import Title from "./components/Title";
import CarBrandCarousel from "./components/CarBrandCarousel";
import UserProfileMenu from "./components/UserProfileMenu";
import NavigationMenu from "./components/NavigationMenu";
import WelcomeMessage from "./components/WelcomeMessage";
import Footer from "./components/Footer";  // Importar el Footer

const cars = [
  {
    name: "Ferrari SF90 Stradale",
    imageUrl: "https://th.bing.com/th/id/OIP.eFVRzvBffNC3wuiiMOCBpgHaEK?rs=1&pid=ImgDetMain",
    specs: {
      engine: "4.0L V8",
      power: "769 HP",
      transmission: "8-speed automatic",
      topSpeed: "211 mph",
    },
  },
  {
    name: "Lamborghini Aventador SVJ",
    imageUrl: "https://www.slashgear.com/wp-content/uploads/2020/01/lamborghini-aventador-svj-roadster-07.jpg",
    specs: {
      engine: "6.5L V12",
      power: "759 HP",
      transmission: "7-speed ISR",
      topSpeed: "217 mph",
    },
  },
  {
    name: "Porsche 911 Turbo S",
    imageUrl: "https://stat.overdrive.in/wp-content/odgallery/2020/05/56966_Porsche-911-Turbo-S_001.jpg",
    specs: {
      engine: "3.8L Flat-6",
      power: "640 HP",
      transmission: "8-speed PDK",
      topSpeed: "205 mph",
    },
  },
];

const Container = styled.div`
  background-color: #f7fafc;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
`;

const NavWrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1000;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Title text="Luxury Cars" />
      </Header>
      <ProfileWrapper>
        <UserProfileMenu />
      </ProfileWrapper>
      <NavWrapper>
        <NavigationMenu />
      </NavWrapper>
      <WelcomeMessage>Welcome, Alan!</WelcomeMessage>
      <CarBrandCarousel />
      <CarGrid cars={cars} />
      <Footer /> {/* Agregamos el Footer */}
    </Container>
  );
};

export default App;
