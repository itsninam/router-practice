import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CitiesContext } from "../contexts/ContextProvider";

const CityDetails = () => {
  const { id } = useParams();
  const { currentCity, getCurrentCity } = useContext(CitiesContext);

  useEffect(() => {
    getCurrentCity(id);
  }, [id]);

  return (
    <ul>
      <li>
        <span>
          {currentCity.emoji} {currentCity.cityName}
        </span>
        <br></br>
        <span>{currentCity.notes}</span>
      </li>
    </ul>
  );
};

export default CityDetails;
