import PortalReactDOM from "react-dom";
import style from "./index.module.scss";
import { ReactNode, useEffect } from "react";

export type TProps = {
  children: ReactNode;
  close: () => void;
};

export const Modal = ({ children, close }: TProps) => {
  const pressKeyEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
        close();
    }
  };

  const closeModalAfterClick = () => {
    close();
  };
  useEffect(() => {
    document.addEventListener("keydown", pressKeyEsc);
    return () => {
      document.removeEventListener("keydown", pressKeyEsc);
    };
  }, []);
  const modalRoot = document.getElementById("modal");
  return PortalReactDOM.createPortal(
    <div className={style.wrapper} onClick={closeModalAfterClick}>
      <div className={style.container}>{children}</div>
    </div>,
    modalRoot!,
  );
};
