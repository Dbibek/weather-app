export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temperature: number;
    temp_max: number;
    temo_min: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
  timezone: number;
  weather: Weather[];
}

export interface WeatherError {
  cod: string;
  message: string;
}
export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}
interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}
interface setLoadingAction {
  type: typeof SET_LOADING;
}
interface setErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}
export type WeatherAction =
  | GetWeatherAction
  | setLoadingAction
  | setErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
