"use client";


import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import Loading from "@/components/Loading";
import { getWeatherByCity } from "@/services/weatherService";
import { WeatherResponse } from "@/types/weather";


export default function Home() {
const [data, setData] = useState<WeatherResponse | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);


const handleSearch = async (city: string) => {
try {
setLoading(true);
setError(null);
const res = await getWeatherByCity(city);
setData(res);
} catch {
setError("City not found");
} finally {
setLoading(false);
}
};


return (
<main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4">
<div className="w-full max-w-md space-y-4">
<SearchBar onSearch={handleSearch} />
{loading && <Loading />}
{error && <p className="text-red-400">{error}</p>}
{data && <WeatherCard data={data} />}
</div>
</main>
);
}