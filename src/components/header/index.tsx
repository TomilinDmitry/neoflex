import React, { useState } from "react";
import style from "./index.module.scss";
import basket from "../../images/icons/basket.svg";
import favorite from "../../images/icons/favorite.svg";
export const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <p className={style.logo}>QPICK</p>
        <div className={style.imageContainer}>
          <img src={favorite} alt='favorite' />
          <img src={basket} alt='backet' />
        </div>
      </div>
    </header>
  );
};
