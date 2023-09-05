const City = ({ city }) => {
  return (
    <li>
      <span>
        {city.emoji} {city.cityName}
      </span>
    </li>
  );
};

export default City;
