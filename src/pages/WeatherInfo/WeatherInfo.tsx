import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import React from "react";
import { weatherApi } from "../../services/WeatherService";
import Weather from "../../components/Weather/Weather";

interface WeatherInfoParams {
  city: string;
}

const WeatherInfo: React.FC = () => {
  const { city } = useParams<WeatherInfoParams>();
  const { data } = weatherApi.useGetWeatherByCityNameQuery(city);

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Container sx={{ marginY: 5 }}>
      <Weather data={data} />
    </Container>
  );
};

export default WeatherInfo;
