import axios from "axios";
import config from "../../config/openWeatherMapConfig.json"

export class OpenWeatherAPI {
    private apiKey: string;
    private city: string;

    constructor () {
        this.apiKey = config.api_key;
        this.city = config.city_name;
    }

    public async getCurrentSpeed() {
        const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
        const headers = {
            "Content-Type": "application/json",
        }

        try {
            const response = await axios.get(url, { headers });
            return response.data.wind;
        }
        catch (err) {
            return err.response.data;
        }
    }
}