import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ServicesPage from "../pages/ServicesPage";
import SupportPage from "../pages/SupportPage";
import PartnersPage from "../pages/PartnersPage";
import Blog from "../components/Blog/Blog";
import Firmware from "../components/Support/Download/Firmware";
import SDK from "../components/Support/Download/SDK";
import Software from "../components/Support/Download/Software";

// Contact pages
import SalesContactPage from "../components/contact/SalesContactPage";
import SubscribePage from "../components/contact/SubscribePage";
import TechnicalSupportPage from "../components/contact/TechnicalSupportPage";
import FaqChatPage from "../components/contact/FaqChatPage";
import AboutPage from "../pages/AboutPage";

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
        <Route path="services" element={<ServicesPage />} />

        <Route path="support" element={<SupportPage />} >
          <Route path="download">
            <Route path="firmware" element={<Firmware />} />
            <Route path="sdk" element={<SDK />} />
            <Route path="software" element={<Software />} />
          </Route>
        </Route>
        <Route path="partners" element={<PartnersPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<AboutPage />} />
        
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
