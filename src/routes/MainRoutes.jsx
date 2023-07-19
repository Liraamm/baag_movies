import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import AddMoviePage from "../pages/AddMoviePage";
import NotFoundPage from "../pages/NotFoundPage";
import SecondaryLayout from "../layouts/SecondaryLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/add" element={<AddMoviePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<SecondaryLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
