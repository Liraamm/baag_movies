import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import AddMoviePage from "../pages/AddMoviePage";
import NotFoundPage from "../pages/NotFoundPage";
import SecondaryLayout from "../layouts/SecondaryLayout";
import EditMoviePage from "../pages/EditMoviePage";
import DetailsPage from "../pages/DetailsPage";


const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/add" element={<AddMoviePage />} />
        <Route path="/edit/:id" element={<EditMoviePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<SecondaryLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
