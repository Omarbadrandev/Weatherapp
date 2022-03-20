import { Box, Typography } from "@mui/material";
import { AxiosError } from "axios";
import React from "react";
import { convertMethodFromKelvinToCelcius } from "../utils";

interface WeatherDescriptionProps {
  temprature: number | undefined;
  feelsLike: number | undefined;
  pressure: number | undefined;
  tempMax: number | undefined;
  tempMin: number | undefined;
  humidity: number | undefined;
  error: AxiosError<any, any> | null;
  cityName: string | undefined;
}
const WeatherDescriptionComponent = (
  props: WeatherDescriptionProps
): JSX.Element => {
  const {
    temprature,
    feelsLike,
    pressure,
    tempMax,
    tempMin,
    humidity,
    error,
    cityName
  } = props;
  if (error) {
    return <div>{error.message}</div>;
  }
  const tempratureInfo = [
    { titel: "Temprature", data: convertMethodFromKelvinToCelcius(temprature) },
    { titel: "Feels Like", data: convertMethodFromKelvinToCelcius(feelsLike) },
    { titel: "Pressure", data: pressure },
    { titel: "Humidity", data: humidity }
  ];

  const maxMinTemprature = [
    { titel: "Min", data: convertMethodFromKelvinToCelcius(tempMin) },
    { titel: "Max", data: convertMethodFromKelvinToCelcius(tempMax) }
  ];
  return (
    <>
      <Typography variant="h3">{cityName}</Typography>
      {tempratureInfo.map((info) => (
        <Box display={"flex"} flexDirection="row" gap={1} key={info.titel}>
          <Typography>{info.titel}:</Typography>
          <Typography>
            {info.data ? info.data : `${info.titel} is not available`}
          </Typography>
        </Box>
      ))}
      <Box>
        <Box display={"flex"} flexDirection="row" gap={1}>
          {maxMinTemprature.map((temp) => (
            <React.Fragment key={temp.titel}>
              <Typography>{temp.titel}:</Typography>
              <Typography>{temp.data}</Typography>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default WeatherDescriptionComponent;
