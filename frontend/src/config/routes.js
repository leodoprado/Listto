import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/informacoes" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}