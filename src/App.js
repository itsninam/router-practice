import "./App.css";
import { Route, Routes, Navigate } from "react-router";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./pages/CitiesList";
import Countries from "./pages/Countries";
import data from "./data/cities";

function App() {
  const [cities, setCities] = useState(data);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CitiesList cities={cities} />} />
          <Route path="countries" element={<Countries />} />
          <Route path="*" element={<p>No match</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
