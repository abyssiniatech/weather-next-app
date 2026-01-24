import { api } from "@/lib/axios";
import { WeatherResponse } from "@/types/weather";

export const getWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!API_KEY) {
    throw new Error("Weather API key is missing");
  }

  const res = await api.get<WeatherResponse>(
    `/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  return res.data;
};
