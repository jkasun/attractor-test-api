import { readFile } from "fs/promises";
import { WeatherData } from "../interfaces/WeatherData";

// This will cache weather data from json file to avoid reading for each request, assuming that this fill will not change frequently
let weatherData: WeatherData[] | null = null;

type FileData = {
  [key: string]: {
    temperature: string;
    humidity: string;
    description: string;
  };
};

export const getWeatherData = async () => {
  if (weatherData) {
    return weatherData;
  } else {
    const filePath = process.env.WEATHER_DATA_FILE_PATH || "";

    if (filePath) {
      const fileContent = await readFile(filePath);
      const fileData = JSON.parse(fileContent.toString()) as FileData;
      weatherData = [];

      for (let key in fileData) {
        weatherData.push({
          city: key,
          ...fileData[key],
        });
      }

      return weatherData;
    } else {
      throw new Error("WEATHER_DATA_FILE_NOT_FOUND");
    }
  }
};

export const getWeatherDataByCity = async (city: string) => {
  const weatherData = await getWeatherData();
  return weatherData.find((i) => i.city.toLowerCase() === city.toLowerCase());
};
