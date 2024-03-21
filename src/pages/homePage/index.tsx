import React from "react";
import style from "./index.module.scss";
import { MainContainer } from "../../components/Main";
export const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MainContainer />
      </div>
    </div>
  );
};
