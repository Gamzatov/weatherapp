import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { IWeather } from "../../types/IWeather";
import { getDateByUnixTimestamp } from "../../utils/getDateByUnixTimestamp";

interface WeatherProps {
  data: IWeather;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  const [togglePop, setTogglePop] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const handleClose = () => {
    setTogglePop(null);
  };
  console.log(data);

  return (
    <Paper sx={{ borderRadius: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <Button
        onClick={() => {
          history.push("/weather");
          handleClose();
        }}
      >
        <CloseIcon />
      </Button>
      <Box padding={3} borderRadius={2} maxWidth="600px" margin="0 auto">
        <Box marginTop={2} display="flex" justifyContent="center">
          <Typography align="center" component="h1" variant="h3">
            {data.name}
          </Typography>
          <Typography align="center" component="p" fontSize="12px">
            {getDateByUnixTimestamp(data.dt)}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{ margin: "0 auto" }}
            component="img"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
          <Typography align="center" component="p" fontSize="12px">
            {data.weather[0].description}
          </Typography>
        </Box>

        <Box marginTop={4}>
          <Box paddingX={3} maxWidth="400px" margin="0 auto">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Temperature</Typography>
              <Typography variant="h6">
                {data.main.temp.toFixed()}
                &deg;C
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Feels like</Typography>
              <Typography variant="h6">
                {data.main.feels_like.toFixed()}
                &deg;C
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Pressure</Typography>
              <Typography variant="h6">{data.main.pressure}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Weather;
