import { createContext, useState } from "react";
import data from "../data/cities";

const CitiesContext = createContext();

const ContextProvider = ({ children }) => {
  const [cities, setCities] = useState(data);
  const [currentCity, setCurrentCity] = useState({});

  const getCurrentCity = (id) => {
    setCurrentCity(data.find((city) => city.id === Number(id)));
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
        currentCity,
        getCurrentCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export { ContextProvider, CitiesContext };
