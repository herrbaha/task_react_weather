import { useState } from "react";
import "../css/search.css";
import Weatherresult from "./Weatherresult";
import ReactLoading from "react-loading";
import London from "./London";

function Search() {
  const [wheatherData, setWheatherData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  window.onbeforeunload = () => {
    localStorage.removeItem("password", "email");
  };
  const citytext = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  async function getdata(value) {
    setLoading(true);
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=979bcb3167224872adb115058211210&q=${value}&days=3&aqi=no&alerts=no`
      );
      const result = await data.json();
      setWheatherData(result.forecast.forecastday);
      setError(false);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(inputValue);
    getdata(inputValue);
    setInputValue("");
  };
  return (
    <div className="wheather_container">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Search a City"
          value={inputValue}
          onChange={citytext}
        />
        <button type="submit">Search</button>
      </form>
      <London />
      {!loading && error ? (
        <div className="wrong">you misspelled or City can’t find!...</div>
      ) : !loading ? (
        <div className="weatherresult">
          <h2> {cityName} </h2>
            {wheatherData.map((item, index) => (
            <Weatherresult
              key={index}
              date={item.date}
              icon={item.day.condition.icon}
              condition={item.day.condition.text}
              temp={item.day.avgtemp_c}
              humidity={item.day.avghumidity}
            />
          ))}
        </div>
      ) : (
        <ReactLoading
          className="loading"
          type="spinningBubbles"
          color="rgb(255, 217, 0)"
          height={97}
          width={97}
        />
      )}
    </div>
  );
}
export default Search;
