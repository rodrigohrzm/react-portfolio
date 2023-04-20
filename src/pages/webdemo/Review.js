import React from "react"

const Card = ({ name, score, review, imageSrc }) => {
    return(
        <div className="reviewBlock">
            <div className="reviewer">
                <img src={imageSrc} />
                <h3>{name}</h3>
            </div>
            <div className="reviewText">
                <text>{score}</text>
                <p>{review}</p>
            </div>
        </div>
    );
}

export default Card;