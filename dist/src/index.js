"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenWeatherAPI_1 = require("./OpenWeatherAPI/OpenWeatherAPI");
var openWeatherApi = new OpenWeatherAPI_1.OpenWeatherAPI();
openWeatherApi.getCurrentSpeed().then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
