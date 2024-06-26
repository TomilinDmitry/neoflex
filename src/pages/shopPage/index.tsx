import React from "react";
import style from "./index.module.scss";
import { BuyBasketContainer } from "../../components/buyBasket";
const ShopPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <BuyBasketContainer />
      </div>
    </div>
  );
};

export default ShopPage;
