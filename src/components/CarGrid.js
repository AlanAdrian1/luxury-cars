import React from "react";
import styled from "styled-components";
import CarCard from "./CarCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CarGrid = ({ cars }) => {
  return (
    <Grid>
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </Grid>
  );
};

export default CarGrid;
