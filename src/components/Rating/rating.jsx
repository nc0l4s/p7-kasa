import React from 'react';
import css from "./rating.module.scss"
import redstar from "../../assets/fullstar.png"
import greystar from "../../assets/emptystar.png"


const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];
  
    return (
      <div className={css.rating}>
        {stars.map((star) =>
          rating >= star ? (
            <img
              key={star.toString()}
              className={css.rating_icon}
              src={redstar}
              alt="red star"
            />
          ) : (
            <img
              key={star.toString()}
              className={css.rating_icon}
              src={greystar}
              alt="grey star"
            />
          )
        )}
      </div>
    )
}
export default Rating;