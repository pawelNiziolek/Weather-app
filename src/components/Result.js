import React from "react";
import "./Result.css";

// sunset icon: <i class="fas fa-sun"></i>
// sunrise icon: <i class="far fa-sun"></i>
// wind icon: <i class="fas fa-wind"></i>
// temperature icon: <i class="fas fa-temperature-high"></i>
// pressure icon: <i class="fas fa-tachometer-alt"></i>

const Result = props => {
  const {
    city,
    temp,
    sunset,
    value,
    sunrise,
    wind,
    pressure,
    error
  } = props.data;

  // that the city displayed always starts with a capital letter
  const cityLetter = city.slice(0, 1).toUpperCase();
  const cityNew = cityLetter + city.slice(1);

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  let content = (
    <div className="content">
      <p className="city">
        Miasto:
        <strong> {cityNew}</strong>
      </p>
      <div className="values">
        <div className="t-w-p">
          <p>Temperatura</p>
          <p>
            <i className="fas fa-temperature-high" />
          </p>
          <p>
            <strong>{temp} &#176;C</strong>
          </p>
        </div>
        <div className="t-w-p">
          <p>Wiatr</p>
          <p>
            <i className="fas fa-wind" />
          </p>
          <span>
            <strong>{wind} m/s</strong>
          </span>
        </div>
        <div className="t-w-p">
          <p>Ciśnienie</p>
          <p>
            <i className="fas fa-tachometer-alt" />
          </p>
          <span>
            <strong>{pressure} hPa</strong>
          </span>
        </div>
      </div>
      <div className="sun">
        <div className="sunrise">
          <p>
            <i className="fas fa-sun" />
          </p>
          <p>
            Wschód słońca: <strong>{city.length > 0 && sunriseTime}</strong>
          </p>
        </div>
        <div className="sunset">
          <p>
            <i className="far fa-sun" />
          </p>
          <p>
            Zachód słońca: <strong>{city.length > 0 && sunsetTime}</strong>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="result">
      {error ? (
        <div className="error">
          {value.length === 0
            ? "Wpisz nazwę miasta w wyszukiwarkę"
            : `Nie ma w bazie ${city}`}
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;
