import React from "react";
import style from "./index.module.scss";
import Card from "../../../UI/Card";
import { dataCards } from "../../../../services/mocks/data";
export const WirelessHeadPhones = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.title}>Беспроводные наушники</span>
      <div className={style.container}>
        {dataCards.wirellesHeadPhones.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>
    </div>
  );
};
