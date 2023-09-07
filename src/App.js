import "./App.css";
import { Route, Routes, Navigate } from "react-router";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./pages/CitiesList";
import Countries from "./pages/Countries";
import { ContextProvider } from "./contexts/ContextProvider";
import CityDetails from "./pages/CityDetails";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CitiesList />} />
          <Route path="cities/:id" element={<CityDetails />} />
          <Route path="countries" element={<Countries />} />
          <Route path="*" element={<p>No match</p>} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
