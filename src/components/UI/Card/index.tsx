import React, { useState } from "react";
import style from "./index.module.scss";
import rating from "../../../images/icons/rating.svg";
import { Tdata } from "../../../services/mocks/data";
import { useDispatch, useSelector } from "../../..";
import {
  addItem,
  incrementItem,
} from "../../../services/slices/productSlice";
import { Modal } from "../../modal";
import { ProductDetails } from "../../modal/productDetails";

const Card = ({ ...card }: Tdata) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.product);
  const [open, setOpen] = useState<boolean>(false);

  const handleAddToBasket = () => {
    const existingItem = basket.find((item) => item.id === card.id);
    if (existingItem) {
      dispatch(incrementItem(existingItem.id));
    } else {
      dispatch(addItem({ ...card }));
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={style.container}>
        <div
          className={style.image}
          onClick={handleOpen}
          title='Нажми чтобы увидеть подробности...'>
          <img src={card.image} alt='headPhone' />
        </div>
        <div className={style.infoBlock}>
          <div className={style.info}>
            <span>{card.name}</span>
            <p
              className={`${
                card.salePrice
                  ? style.salePriceBlock
                  : style.priceBlock
              }`}>
              <span className={style.price}>{card.price} ₽</span>
              {card.salePrice && (
                <span className={style.salePrice}>
                  {card.salePrice} ₽
                </span>
              )}
            </p>
          </div>
          <p className={style.ratingBlock}>
            <span className={style.rating}>
              <img src={rating} alt='rating' />
              {card.rating}
            </span>
            <button className={style.buy} onClick={handleAddToBasket}>
              Купить
            </button>
          </p>
        </div>
      </div>
      {open && (
        <Modal close={handleClose}>
          <ProductDetails card={card} onClose={handleClose} />
        </Modal>
      )}
    </>
  );
};

export default Card;
