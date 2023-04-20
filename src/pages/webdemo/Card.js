import {ReactComponent as Basket} from '../../assets/images/Basket.svg';
import { Link } from "react-router-dom"
import React from "react"

const Card = ({ title, price, description, imageSrc }) => {
    return(
        <div class="cardContainer">
            <img src={imageSrc} />
            <div class="cardTop">
                <h3>{title}</h3>
                <text>{price}</text>
            </div>
            <p>{description}</p>
            <button><Link to={"/"}>
                Order a delivery <Basket class="cardIco" />
            </Link></button>
        </div>
    );
}

export default Card;