export interface WeatherResponse {
name: string;
main: {
temp: number;
humidity: number;
};
weather: {
description: string;
icon: string;
}[];
wind: {
speed: number;
};
}