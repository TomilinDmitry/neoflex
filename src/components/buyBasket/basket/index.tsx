import React, { useMemo } from "react";
import style from "./index.module.scss";
import { BasketCard } from "../../UI/basketCard";
import { useSelector } from "../../..";

export const Basket = () => {
  const { basket } = useSelector((state) => state.product);
  
  const totalPrice = useMemo(() => {
    return basket.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }, [basket]);

  return (
    <div className={style.wrapper}>
      <span className={style.title}>Корзина</span>
      <div className={style.container}>
        <div className={style.card}>
          {basket.map((card, index) => (
            <BasketCard {...card} key={index} />
          ))}
        </div>
        <div className={style.totalPrice}>
          <p className={style.price}>
            <span>ИТОГО</span>
            <span>₽ {totalPrice}</span>
          </p>
          <button className={style.button}>
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
};
