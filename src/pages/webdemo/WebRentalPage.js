import React, { useState } from 'react';
import { WebTitle } from './WebTitle'
import { WebCard } from "./WebCard";
import RentalInventory from '../../data/RentalInventory.json';

function WebRentalPage() {

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(100);

  const classes = Array.from(new Set(RentalInventory.rentals.map(rental => rental.class)));

  const handleClassFilterChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setSelectedPrice(Number(event.target.value));
  };

  const availableRentals = RentalInventory.rentals.filter(rental => !rental.booked_status);
  const unavailableRentals = RentalInventory.rentals.filter(rental => rental.booked_status);

  const filteredAvailableRentals = availableRentals.filter(rental => {
    const classFilter = !selectedClass || rental.class === selectedClass;
    const priceFilter = rental.price <= selectedPrice;
    return classFilter && priceFilter;
  });

  const filteredUnavailableRentals = unavailableRentals.filter(rental => {
    const classFilter = !selectedClass || rental.class === selectedClass;
    const priceFilter = rental.price <= selectedPrice;
    return classFilter && priceFilter;
  });

  const filteredRentals = filteredAvailableRentals.concat(filteredUnavailableRentals);

  return (
<>
    <WebTitle pageName="Rent a car" />
    <div>
        <label htmlFor="class-filter">Filter by Class:</label>
        <select id="class-filter" value={selectedClass} onChange={handleClassFilterChange}>
          <option value="">All</option>
          {classes.map((classOption, index) => (<option key={index} value={classOption}>{classOption}</option>))}
        </select>
    </div>
    <div>
        <label htmlFor="price-filter">Filter by Price:</label>
        <input
          type="range"
          id="price-filter"
          name="price-filter"
          min="1"
          max="150"
          value={selectedPrice}
          onChange={handlePriceFilterChange}
        />
        <output htmlFor="price-filter">{selectedPrice}</output>
    </div>
    <ul>
        {filteredRentals.map((car, index) => <li key={index}><WebCard car={car} /></li>)}
      </ul>
</>
);}

export { WebRentalPage };