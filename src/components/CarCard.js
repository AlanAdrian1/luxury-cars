// src/components/CarCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%; 
  height: auto; /* Permite que la altura sea automática */
  object-fit: contain; /* Asegura que toda la imagen se vea sin cortes */
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CarName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2d3748;
`;

const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  color: #4a5568;
`;

const SpecItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CarCard = ({ car }) => {
  return (
    <Card>
      <Image src={car.imageUrl} alt={car.name} />
      <CardContent>
        <CarName>{car.name}</CarName>
        <SpecsList>
          <SpecItem><strong>Engine:</strong> {car.specs.engine}</SpecItem>
          <SpecItem><strong>Power:</strong> {car.specs.power}</SpecItem>
          <SpecItem><strong>Transmission:</strong> {car.specs.transmission}</SpecItem>
          <SpecItem><strong>Top Speed:</strong> {car.specs.topSpeed}</SpecItem>
        </SpecsList>
      </CardContent>
    </Card>
  );
};

export default CarCard;

