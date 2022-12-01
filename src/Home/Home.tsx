import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import WeatherPage from "../pages/Weather/WeatherPage";
import WeatherInfo from "../pages/WeatherInfo/WeatherInfo";

const Home = () => {
  return (
    <BrowserRouter basename="/weatherapp">
      <Switch>
        <Route exact path="/weather" component={WeatherPage} />
        <Route exact path="/weather/:city" component={WeatherInfo} />
        <Redirect to="/weather" />
      </Switch>
    </BrowserRouter>
  );
};

export default Home;
