import { Link } from "react-router-dom"
import React from "react"

function WebCard(props) {
    let { make, model, year, mileage, booked_status, horsepower, automatic, MPG, price } = props.car;
    let availability = booked_status ? "Booked" : "Available";
    let cardClass = booked_status ? "booked" : "";
    return(
        <div className={`card ${cardClass}`}>
            <p>Status: {availability}</p>
            <h2>{make} {model}</h2>
            <p>Year: {year}</p>
            <p>Mileage: {mileage}</p>
            <p>Horsepower: {horsepower}</p>
            <p>Automatic: {automatic ? "Automatic" : "Manual"}</p>
            <p>MPG (City/Highway): {MPG.city}/{MPG.highway}</p>
            <p>Price/day: {price}€</p>
        </div>
    );
}

export { WebCard };