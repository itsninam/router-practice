import City from "./City";

const Cities = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => {
        return <City city={city} key={city.id} />;
      })}
    </ul>
  );
};

export default Cities;
