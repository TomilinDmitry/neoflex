import React from "react";
import style from "./index.module.scss";
import { Header } from "../../components/header";
import { MainContainer } from "../../components/Main";
import { Footer } from "../../components/footer";
export const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <main>
          <MainContainer />
        </main>
        <Footer />
      </div>
    </div>
  );
};
