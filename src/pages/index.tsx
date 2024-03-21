import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./homePage";
import ShopPage from "./shopPage";

const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
};

export default MainPage;
