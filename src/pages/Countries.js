import { useContext } from "react";
import { CitiesContext } from "../contexts/ContextProvider";
import Country from "./Country";

const Countries = () => {
  const { cities } = useContext(CitiesContext);

  const uniqueCountries = cities.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.country === current.country)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  return (
    <ul>
      {uniqueCountries.map((country) => {
        return <Country key={country.id} country={country} />;
      })}
    </ul>
  );
};

export default Countries;
