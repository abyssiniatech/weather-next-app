


import { WeatherResponse } from "@/types/weather";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

interface Props {
  data: WeatherResponse;
}

export default function WeatherCard({ data }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center space-y-3">
      <h2 className="text-2xl font-bold">{data.name}</h2>

      <p className="text-4xl font-semibold">
        {Math.round(data.main.temp)}°C
      </p>

      <p className="capitalize text-gray-200">
        {data.weather[0].description}
      </p>

    
      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-200">
        <div className="flex items-center gap-1">
          <WiHumidity size={24} />
          <span>{data.main.humidity}%</span>
        </div>

        <div className="flex items-center gap-1">
          <WiStrongWind size={24} />
          <span>{data.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}
