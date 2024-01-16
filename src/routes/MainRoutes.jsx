// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import { CreateArticle } from "../components/pages/CreateArticle";
import { ErrorComponent } from "../components/pages/ErrorComponent";

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home />}></Route>
                    <Route path={'/home'} element={<Home />}></Route>
                    <Route path={'/articles'} element={<Articles />}></Route>
                    <Route path={'/create-article'} element={<CreateArticle />}></Route>
                    <Route path={'*'} element={<ErrorComponent />}></Route>
                </Routes>
            </div>
            <Sidebar />
            <Footer />
        </BrowserRouter>
    )
}
