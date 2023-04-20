import {ReactComponent as Basket} from '../../assets/images/Basket.svg';
import { Link } from "react-router-dom"
import React from "react"

const Card = ({ title, price, description, imageSrc }) => {
    return(
        <div className="cardContainer">
            <img src={imageSrc} />
            <div className="cardTop">
                <h3>{title}</h3>
                <text>{price}</text>
            </div>
            <p>{description}</p>
            <button><Link to={"/"}>
                Order a delivery <Basket className="cardIco" />
            </Link></button>
        </div>
    );
}

export default Card;