import axios from "axios";
import { useEffect, useState } from "react";
import Input from "./components/inputArea";
import NotFound from "./components/notFound";
import MainPage from "./components/mainPage";

function App() {
  const apiKey = "3f12096387c3b4096f7d2f3f5a74e5da"
  const [city, setCity] = useState("London");
  const [err, setErr] = useState(false);
  const [weather, setWeather] = useState("Belirsiz");
  const [temp, setTemp] = useState("Belirsiz");
  const [icon, setIcon] = useState("Belirsiz");

  function getWeather(city) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((res) => {
        setWeather(res.data.weather[0].main);
        setTemp(res.data.main.temp);
        console.log(res.data);
        setErr(false);
      })
      .catch((err) => {
        setErr(true);
      });
  }

  useEffect(() => {

    getWeather(city);


  }, [city]);

  useEffect(() => {
    if(weather === "Clear"){
      setIcon("https://img.icons8.com/emoji/48/000000/sun-emoji.png")
    }else if(weather === "Clouds"){
      setIcon("https://img.icons8.com/emoji/48/000000/cloud-emoji.png")
    }else if(weather === "Rain"){
      setIcon("https://img.icons8.com/emoji/48/000000/rain-cloud-emoji.png")
    }else if(weather === "Snow"){
      setIcon("https://img.icons8.com/emoji/48/000000/snowflake-emoji.png")
    }else if(weather === "Thunderstorm"){
      setIcon("https://img.icons8.com/emoji/48/000000/thunder-cloud-and-rain-emoji.png")
    }else if(weather === "Drizzle"){
      setIcon("https://img.icons8.com/emoji/48/000000/rain-cloud-emoji.png")
    }
  }, [weather])



  return (
    <>
      <Input  onSetCity={setCity}/>

      { err === true ? <NotFound /> : <MainPage weather={weather} temp={temp} city={city} icon={icon}/>}

      
    </>
  );
}

export default App;
