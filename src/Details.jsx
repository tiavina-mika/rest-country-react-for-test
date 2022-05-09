import { useState } from "react";

const Details = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => setShowDetails((prev) => !prev);

  return (
    <li key={country.index}>
      {showDetails ? (
        <div key={country.index}>
          <p>{country.name.common}</p>
          <p>capital : {country.capital}</p>
          <p>area : {country.area}</p>
          <h3> languages : </h3>
          {Object.values(country.languages).map((value) => (
            <ul key={value}>
              <li>{value}</li>
            </ul>
          ))}
          flag : <img src={country.flags.svg} alt="" />
        </div>
      ) : (
        <div>
          <h3>{country.name.common}</h3>
          <button
            // key={country.id}
            onClick={() => toggleShowDetails(country.index)}
          >
            show
          </button>
        </div>
      )}
    </li>
  );
};

export default Details;
