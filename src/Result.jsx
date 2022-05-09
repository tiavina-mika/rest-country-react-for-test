const Result = ({ countries }) => {
  return countries.map((country) => (
    <div key={country.name.common}>
      <p>{country.name.common}</p>
      <p>capital : {country.capital}</p>
      <p>area : {country.area}</p>
      <h3> languages : </h3>
      {country.languages &&
        Object.values(country.languages).map((value) => (
          <ul key={value}>
            <li>{value}</li>
          </ul>
        ))}
      flag : <img src={country.flags.svg} alt="" />
    </div>
  ));
};

export default Result;
