import React from "react";
import style from "./index.module.scss";
import VK from "../../images/icons/VK.svg";
import TG from "../../images/icons/Telegram.svg";
import WS from "../../images/icons/Whatsapp.svg";
import switchLanguageIcon from "../../images/icons/switchLanguageIcon.svg";
export const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <p className={style.logo}>QPICK</p>
        <div className={style.center}>
          <div>
            <ul className={style.list}>
              <li>Избранное</li>
              <li>Корзина</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className={style.conditions}>
            <span>Условия сервиса</span>
            <p className={style.switchLanguage}>
              <img src={switchLanguageIcon} alt='planet' />
              <span className={style.activeLanguage}>Рус</span>
              <span className={style.language}>Eng</span>
            </p>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={VK} alt='backet' />
          <img src={TG} alt='favorite' />
          <img src={WS} alt='favorite' />
        </div>
      </div>
    </footer>
  );
};
