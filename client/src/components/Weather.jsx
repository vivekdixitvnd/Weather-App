// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`/api/weather?city=${city}`);
            setWeather(response.data);
            setError('');
        } catch (error) {
            setError('City not found or server error');
            setWeather(null);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ padding: '10px', width: '200px' }}
            />
            <button onClick={fetchWeather} style={{ padding: '10px', marginLeft: '10px' }}>
                Get Weather
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Humidity: {weather.main.humidity} %</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
