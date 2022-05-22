import { useState, useEffect } from "react";
import Weatherresult from "./Weatherresult";

const FEATURED_API = "https://api.weatherapi.com/v1/forecast.json?key=979bcb3167224872adb115058211210&q=London&days=3&aqi=no&alerts=no"

const London = () => {

const [london, setLondon] = useState([])  

useEffect(() => {
  fetch(FEATURED_API)
  .then((res) => res.json())
  .then((data) => {
    setLondon(data.forecast.forecastday);
  });
},[]);

    return (
       <div>
       <h2> London </h2>
          {london.map((item, index) => (
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
    )
}

export default London;