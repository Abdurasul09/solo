import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddPage from "./pages/AddPage";
import AddminPage from "./pages/AddminPage";
import Navibar from "./components/Navbar";
import AdminContextProvider from "./contexts/AdminContext";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";
import ClientContextProvider from "./contexts/ClientContext";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import AuthContextProvider from "./contexts/AuthContext";
import CommentContextProvider from "./contexts/CommentContext";
import FavoritesPage from "./pages/FavoritesPage";
import Footer from "./components/Footer";
import OrderPage from "./pages/OrderPage";
import CreditCardPage from "./pages/CreditCard/CreditCardPage";
// import CreditCardPage from "./pages/CreditCardPage";

const MyRoutes = () => {
  return (
    <CommentContextProvider>
      <AuthContextProvider>
        <ClientContextProvider>
          <AdminContextProvider>
            <BrowserRouter>
              <Navibar />
              <Routes>
                <Route path="/admin" element={<AddminPage />} />
                <Route path="/admin/add" element={<AddPage />} />
                <Route path="/admin/edit/:id" element={<EditPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/product/:id" element={<DetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/credit/card" element={<CreditCardPage />} />

                <Route path="/order" element={<OrderPage />} />

                <Route path="/favorites" element={<FavoritesPage />} />

                <Navigate to="/" />
              </Routes>
              <Footer />
            </BrowserRouter>
          </AdminContextProvider>
        </ClientContextProvider>
      </AuthContextProvider>
    </CommentContextProvider>
  );
};

export default MyRoutes;
