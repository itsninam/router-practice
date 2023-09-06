import { createContext, useState } from "react";
import data from "../data/cities";

const CitiesContext = createContext();

const ContextProvider = ({ children }) => {
  const [cities, setCities] = useState(data);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export { ContextProvider, CitiesContext };
