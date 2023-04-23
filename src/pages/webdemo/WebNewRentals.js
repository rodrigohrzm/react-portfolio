import React from 'react';
import RentalInventory from '../../data/RentalInventory.json';
import { WebCard } from "./WebCard";

function WebNewRentals() {
  const newestCars = RentalInventory.rentals
        .filter((car) => car.booked_status === false)
        .sort((a, b) => b.year - a.year)
        .slice(0, 3)
        .sort((a, b) => b.model.localeCompare(a.model))
        .map((car) => <WebCard key={car.make + car.model} car={car} />);

    return (
      <div>
        <h2>Our newest rentals</h2>
        <div style={{display: "flex", display: "flex", flexWrap: "wrap", marginRight: "auto", marginLeft: "auto", position: "relative", justifyContent: "center"}}>
          {newestCars}
        </div>
      </div>
    )};

  export { WebNewRentals };