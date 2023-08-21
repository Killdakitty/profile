import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { weatherData } from "../data/Weather";

export default function Weather(props) {
    //null with ""=string, //null without ""= false 
  const [weather, setWeather] = useState(null);
  const apiKey = "ZmVpCgyhoiHH4WI6S2ZjnWvJ6khMZjX1";
  const params = useParams();
  const { location } = params;
  const url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature&timesteps=1h&units=metric&apikey=${process.env.REACT_APP_WEATHERAPI_KEY}`;

  const getWeather = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setWeather(data);
    } catch (e) {
      console.log("error fetching data", e);
    }
  };
  //run as soon as the component mounts
  //if we have a position then 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
      if (position.coords.latitude && position.coords.longitude){
         getWeather(`https://api.tomorrow.io/v4/timelines?location=${position.coords.latitude},${position.coords.longitude}&fields=temperature&timesteps=1h&units=metric&apikey=${process.env.REACT_APP_WEATHERAPI_KEY}`);
        }else{
            getWeather(`https://api.tomorrow.io/v4/timelines?location=newyork&fields=temperature&timesteps=1h&units=metric&apikey=${process.env.REACT_APP_WEATHERAPI_KEY}`)
        }
    });
  }, []);

  //show the fetched data
  const loaded = () => {
    let Cel=weather.data.timelines[0].intervals[0].values.temperature
    return (
      <div  className="text-3xl" >
        <h2>Current Temperature:</h2>
        {/* <h1>{weather.data.timelines[0].intervals[0].values.temperature}</h1> */}
        <h3>{Cel*9/5+32} <sup>O</sup>F </h3>
      </div>
    );
  };
  const loading = () => <h1>loading weather....</h1>;

  return weather && weather.data ? loaded() : loading();
}
