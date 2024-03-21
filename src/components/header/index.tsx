import React from "react";
import style from "./index.module.scss";
import basketProduct from "../../images/icons/basket.svg";
import favorite from "../../images/icons/favorite.svg";
import { Link } from "react-router-dom";
import { useSelector } from "../..";
export const Header = () => {
  const { basket } = useSelector((state) => state.product);

  return (
    <header>
      <div className={style.container}>
        <Link to='/'>
          <p className={style.logo}>QPICK</p>
        </Link>
        <div className={style.imageContainer}>
          <img src={favorite} alt='favorite' />
          <Link to='/basket'>
            <img src={basketProduct} alt='backet' />
            {basket.length > 0 && (
              <span className={style.counterElement}>
                {basket.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
