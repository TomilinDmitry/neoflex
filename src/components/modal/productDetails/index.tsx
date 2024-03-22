import React from "react";
import { Tdata } from "../../../services/mocks/data";
import style from "./index.module.scss";
import closeIcon from "../../../images/icons/closeIcon.svg";
type TProps = {
  card: Tdata;
  onClose: () => void;
};
export const ProductDetails = ({ card, onClose }: TProps) => {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <h3>{card.name}</h3>
        <img src={closeIcon} alt='closeIcon' onClick={onClose} />
      </div>
      <div className={style.imageBlock}>
        <img src={card.image} alt='cardImage' />
      </div>
      <div className={style.infoBlock}>
        <section>
          <h3>Описание</h3>
        </section>
        <p className={style.description}>
          Активное шумоподавление следующего уровня и адаптивная
          прозрачность снижают уровень внешних шумов. Пространственный
          звук выводит погружение на удивительно личный уровень. А
          скачок в мощности обеспечивает 6 часов автономной работы от
          одного заряда. Сенсорное управление теперь позволяет
          регулировать громкость одним движением. регулировать
          громкость одним движением. регулировать громкость одним
          движением. регулировать громкость одним движением.
          регулировать громкость одним движением.
        </p>
        <section>
          <h3>Общие сведения:</h3>
        </section>
        <ul className={style.infoList}>
          <li>Год: 2020</li>
          <li>Время работы: 4.5 часов</li>
          <li>Вес: 50.4 г.</li>
          <li>Страна: Китай</li>
        </ul>
      </div>
    </div>
  );
};
