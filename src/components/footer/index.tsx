import React from "react";
import style from "./index.module.scss";
import VK from "../../images/icons/VK.svg";
import TG from "../../images/icons/Telegram.svg";
import WS from "../../images/icons/Whatsapp.svg";
import switchLanguageIcon from "../../images/icons/switchLanguageIcon.svg";
import { Link } from "react-router-dom";
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
          <Link to='https://vk.com/crymore3'>
            <img src={VK} alt='VK' />
          </Link>
          <Link to='https://t.me/enjosss'>
            <img src={TG} alt='TG' />
          </Link>
          <Link to='/'>
            <img src={WS} alt='WS' />
          </Link>
        </div>
      </div>
    </footer>
  );
};
