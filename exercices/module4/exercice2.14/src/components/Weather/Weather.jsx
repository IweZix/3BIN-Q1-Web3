import { useEffect, useState } from "react";
import axios from 'axios';

export const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    // Définition de la fonction fetchWeather à l'extérieur du useEffect
    const fetchWeather = () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const city = country.capital[0];
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        axios.get(url)
            .then(response => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchWeather();
    }, [country]);

    if (loading) {
        return (
            <div>
                <h1>Weather in {country.name.common}</h1>
                Loading weather...
            </div>
        );
    }

    return (
        <div>
            <h1>Weather in {country.name.common}</h1>
            <p>
                <strong>temperature:</strong> {Math.round((weather.main.temp - 273.15) * 10) / 10} Celsius
            </p>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} height={100} width={100} />
            <p>
                <strong>wind:</strong> {weather.wind.speed} m/s
            </p>
        </div>
    )
};