import React from "react";
import style from "./index.module.scss";
import { Basket } from "./basket";
export const BuyBasketContainer = () => {
  
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Basket />
      </div>
    </div>
  );
};
