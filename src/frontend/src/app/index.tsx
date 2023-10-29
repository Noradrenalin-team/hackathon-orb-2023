import "./index.scss";
import Routing from "pages";
import Router from "./Router/index.tsx";
import { ThemeProvider, configure } from "@gravity-ui/uikit";
import ContextProvider from "app/contexts";

configure({
  lang: "ru",
});

const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme="light">
        <Router>
          <Routing />
        </Router>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
