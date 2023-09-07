import { Link } from "react-router-dom";

const City = ({ city }) => {
  return (
    <li>
      <Link to={`${city.id}`}>
        <span>
          {city.emoji} {city.cityName}
        </span>
      </Link>
    </li>
  );
};

export default City;
