const Country = ({ country }) => {
  return (
    <li key={country.id}>
      {country.emoji} {country.country}
    </li>
  );
};

export default Country;
