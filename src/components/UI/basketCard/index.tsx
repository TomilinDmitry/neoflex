import React, { useMemo } from "react";
import style from "./index.module.scss";
import { Tdata } from "../../../services/mocks/data";
import deleteBasket from "../../../images/icons/deleteBasket.svg";
import {
  decrementItem,
  deleteItem,
  incrementItem,
} from "../../../services/slices/productSlice";
import { useDispatch } from "../../..";

export const BasketCard = ({ ...card }: Tdata) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(card.id));
  };
  const increment = () => {
    dispatch(incrementItem(card.id));
  };
  const decrement = () => {
    if (card.count > 1) {
      dispatch(decrementItem(card.id));
    }
  };
  const totalPrice = useMemo(() => {
    return card.price * card.count;
  }, [card.price, card.count]);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.image}>
          <img src={card.image} alt='headPhone' />
        </div>
        <div className={style.infoBlock}>
          <p className={style.titleAndPrice}>
            <span className={style.title}>{card.name}</span>
            <span className={style.price}>{card.price} ₽</span>
          </p>
        </div>
        <div className={style.deleteBasket} onClick={handleDelete}>
          <img src={deleteBasket} alt='delete' />
        </div>
      </div>
      <div className={style.counterAndPriceBlock}>
        <p className={style.bottomBlock}>
          <span className={style.counter}>
            <button className={style.decrement} onClick={decrement}>
              -
            </button>
            <span className={style.count}>{card.count}</span>
            <button className={style.increment} onClick={increment}>
              +
            </button>
          </span>
          <span className={style.bottomPrice}>{totalPrice}₽</span>
        </p>
      </div>
    </div>
  );
};
