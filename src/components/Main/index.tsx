import React from "react";
import style from "./index.module.scss";
import { HeadPhones } from "./components/headPhones";
import { WirelessHeadPhones } from "./components/wirelessHeadphones";
export const MainContainer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <HeadPhones />
        <WirelessHeadPhones />
      </div>
    </div>
  );
};
