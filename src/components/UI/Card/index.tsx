import React, { useState } from "react";
import style from "./index.module.scss";
import rating from "../../../images/icons/rating.svg";
import { Tdata } from "../../../services/mocks/data";
import { useDispatch, useSelector } from "../../..";
import {
  addItem,
  incrementItem,
} from "../../../services/slices/productSlice";

const Card = ({ ...card }: Tdata) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const { basket } = useSelector((state) => state.product);
  const handleAddToBasket = () => {
    const existingItem = basket.find((item) => item.id === card.id);
    if (existingItem) {
      dispatch(incrementItem(existingItem.id));
    } else {
      dispatch(addItem({ ...card }));
    }
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={card.image} alt='headPhone' />
      </div>
      <div className={style.infoBlock}>
        <div className={style.info}>
          <span onClick={handleClick}>{card.name}</span>
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
          <button className={style.buy} onClick={handleAddToBasket}>
            Купить{" "}
          </button>
        </p>
      </div>
      {open && (
        <>
          <div className={style.modal}>
            Hello
            <span onClick={handleClickClose}>close</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
