import { OpenWeatherAPI } from "./OpenWeatherAPI/OpenWeatherAPI";

const openWeatherApi = new OpenWeatherAPI();

openWeatherApi
  .getCurrentSpeed()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
