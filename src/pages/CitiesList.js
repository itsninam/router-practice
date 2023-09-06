import { useContext } from "react";
import City from "./City";
import { CitiesContext } from "../contexts/ContextProvider";

const Cities = () => {
  const { cities } = useContext(CitiesContext);
  return (
    <ul>
      {cities.map((city) => {
        return <City city={city} key={city.id} />;
      })}
    </ul>
  );
};

export default Cities;
