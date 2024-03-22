import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import { Header } from "./components/header";
import style from "./App.module.scss";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/basket' element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
