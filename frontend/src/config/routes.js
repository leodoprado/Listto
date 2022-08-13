import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/Home/HomePage";
import FeaturesPage from "../pages/Features/FeaturesPage";
import SupportPage from "../pages/Support/SupportPage";
import LoginPage from "../pages/Login/LoginPage";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/features" element={<FeaturesPage />}></Route>
                <Route exact path="/support" element={<SupportPage />}></Route>
                <Route exact path="/login" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}