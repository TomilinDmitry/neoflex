import React from "react";
import style from "./index.module.scss";
import Card from "../../../UI/Card";
import { dataCards } from "../../../../services/data";
export const HeadPhones = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.title}>Наушники</span>
      <div className={style.container}>
        {dataCards.headPhones.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>
    </div>
  );
};
