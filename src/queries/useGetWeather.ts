import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { openWeatherMapBaseURL, WeatherKey } from "../Constants";
import store from "../store";
import { Weather } from "../types/Weather";

export function useGetWeather() {
  const coordinates = store.getState().value;
  let lon: number, lat: number;
  if (coordinates && coordinates.length > 0) {
    [lon, lat] = coordinates;
  }

  //checking weather coordinates exist and has content through length because the initial value
  //in the store is an empty array which gives us that the coordinates exists even if they are empty
  const isEnabled = !!coordinates && coordinates.length > 0;

  const fetchWeather = async () => {
    const { data: weather } = await axios.get(
      openWeatherMapBaseURL +
        `data/2.5/weather?lat=${lat}&lon=${lon}&appid=8e51c0a8fb74fccdd63a052107469797`
    );
    return weather;
  };
  // https://medium.com/nerd-for-tech/common-data-fetching-patterns-for-real-apps-with-react-query-4b83188a95c1
  // options documentation for react-query can be found in https://react-query.tanstack.com/reference/useQuery
  const weatherForcast = useQuery<Weather, AxiosError>(
    [WeatherKey, coordinates],
    fetchWeather,
    {
      //here the enabled option enables the query to start as soon as the isEnabeeled constant equals to true
      enabled: isEnabled,
      refetchInterval: 10000, //10000 millisecond = 10 seconds as requested to update the data each in 10 seconds
      onSuccess: (data) => {
        "success";
      },
      onError: (error) => {
        //https://tkdodo.eu/blog/react-query-error-handling
        window.alert(`oops! Something went wrong: ${error.message}`);
      }
    }
  );
  return weatherForcast;
}
