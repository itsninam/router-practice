import "./App.css";

import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Cities from "./pages/Cities";
import Countries from "./pages/Countries";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<Cities />} />
          <Route path="countries" element={<Countries />} />
          <Route path="*" element={<p>No match</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
