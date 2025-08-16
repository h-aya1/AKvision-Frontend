import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import SupportPage from "../pages/SupportPage";
import PartnersPage from "../pages/PartnersPage";
import Blog from "../components/Blog/Blog";

// Contact pages
import SalesContactPage from "../pages/contact/SalesContactPage";
import SubscribePage from "../pages/contact/SubscribePage";
import TechnicalSupportPage from "../pages/contact/TechnicalSupportPage";
import FaqChatPage from "../pages/contact/FaqChatPage";
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
        <Route path="blog" element={<Blog />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
        
        {/* Contact Routes */}
        <Route path="contact">
          <Route path="sales" element={<SalesContactPage />} />
          <Route path="subscribe" element={<SubscribePage />} />
          <Route path="technical" element={<TechnicalSupportPage />} />
          <Route path="faq" element={<FaqChatPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
