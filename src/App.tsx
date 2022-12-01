import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import Home from "./Home/Home";
import { store } from "./store/store";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Home />
    </Provider>
  </ThemeProvider>
);

export default App;
