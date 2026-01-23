import { api } from "@/lib/axios";
import { WeatherResponse } from "@/types/weather";

//  API key declared in service layer
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

//  Safety check (recommended)
if (!API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_WEATHER_API_KEY");
}

export const getWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  const res = await api.get<WeatherResponse>(
    `/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  return res.data;
};
