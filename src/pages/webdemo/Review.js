import React from "react"

const Card = ({ name, score, review, imageSrc }) => {
    return(
        <div class="reviewBlock">
            <div class="reviewer">
                <img src={imageSrc} />
                <h3>{name}</h3>
            </div>
            <div class="reviewText">
                <text>{score}</text>
                <p>{review}</p>
            </div>
        </div>
    );
}

export default Card;