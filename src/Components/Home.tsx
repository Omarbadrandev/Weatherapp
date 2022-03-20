import { Box, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useGetWeather } from "../queries/useGetWeather";
import { useGetAutoCompleteLocation } from "../queries/useGetSearchedlocation";
import store from "../store";
import { Feature } from "../types/AutoCompleteLocation";
import CitySelect from "./AutoComplete";
import WeatherDescription from "./WeatherDescription";

const Home = (): JSX.Element => {
  const [city, setCity] = useState<string>("");
  const inputHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    event.preventDefault();
    setCity(value);
  };

  const selectionHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: Feature | null
  ) => {
    event.preventDefault();
    store.dispatch({
      type: "setNewCityLocationState",
      value: value?.geometry.coordinates
    });
  };
  const { data, error, isLoading } = useGetAutoCompleteLocation({
    city: city
  });
  const {
    data: weatherData,
    isLoading: weatherDataLoading,
    error: weatherDataError
  } = useGetWeather();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      py={5}
      alignItems="center"
    >
      <CitySelect
        onCityInputChange={inputHandler}
        options={data?.features}
        error={error}
        isLoading={isLoading}
        onSelectionChange={selectionHandler}
      />
      {weatherDataLoading ? (
        <LinearProgress />
      ) : (
        <WeatherDescription
          error={weatherDataError}
          temprature={weatherData?.main.temp}
          feelsLike={weatherData?.main.feels_like}
          pressure={weatherData?.main.pressure}
          tempMax={weatherData?.main.temp_min}
          tempMin={weatherData?.main.temp_max}
          humidity={weatherData?.main.humidity}
          cityName={weatherData?.name}
        />
      )}
    </Box>
  );
};

export default connect()(Home);
