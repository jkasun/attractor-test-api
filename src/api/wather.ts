import express from 'express';
import { getWeatherData, getWeatherDataByCity } from '../controller/wather.controller';
import { WeatherData } from '../interfaces/WeatherData';

const router = express.Router();

router.get<{}, WeatherData>('/', async (req, res) => {
  const city = req.query.city?.toString() || "";
  const weatherData = await getWeatherDataByCity(city);

  if (weatherData) {
    res.json(weatherData)
  } else {
    res.status(404).send();
  }
});

router.get<{}, WeatherData[]>('/recent', async (req, res) => {
  const weatherData = await getWeatherData();
  res.json(weatherData);
});

export default router;
