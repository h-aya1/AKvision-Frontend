import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

import SupportPage from "../pages/SupportPage";
import PartnersPage from "../pages/PartnersPage";
// import AboutPage from "../pages/AboutPage/";

// We can create and import other pages here later
// import ProductsPage from '../pages/ProductsPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes inside here will use the MainLayout */}
      <Route path="/" element={<MainLayout />}>
        {/* The default page at "/" */}
        <Route index element={<HomePage />} />

        {/* Example of another page we can add later */}
        <Route path="products" element={<ProductsPage />} />

        <Route path="support" element={<SupportPage />} />
        <Route path="partners" element={<PartnersPage />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
