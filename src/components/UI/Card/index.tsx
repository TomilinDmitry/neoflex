import React from "react";
import style from "./index.module.scss";
import rating from "../../../images/icons/rating.svg";
import { Tdata } from "../../../services/data";

const Card = ({ ...card }: Tdata) => {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={card.image} alt='headPhone' />
      </div>
      <div className={style.infoBlock}>
        <div className={style.info}>
          <span>{card.name}</span>
          <p
            className={`${
              card.salePrice ? style.salePriceBlock : style.priceBlock
            }`}>
            <span className={style.price}>{card.price} ₽</span>
            {card.salePrice && (
              <span className={style.salePrice}>
                {card.salePrice} ₽
              </span>
            )}
          </p>
        </div>
        <p className={style.ratingBlock}>
          <span className={style.rating}>
            <img src={rating} alt='rating' />
            {card.rating}
          </span>
          <button className={style.buy}>Купить </button>
        </p>
      </div>
    </div>
  );
};

export default Card;
