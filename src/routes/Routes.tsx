import { Routes, Route } from "react-router-dom";
import { Layout } from "../../src/components/Layout";
import { Home } from "../../src/pages/Home";
import { FilmDetails } from "../../src/pages/FilmDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="films/:id" element={<FilmDetails />} />
      </Route>
    </Routes>
  );
};