import "./index.scss";
import Routing from "pages";
import Router from "./Router/index.tsx";
import {ThemeProvider, configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routing />
      </Router>
    </ThemeProvider>
  );
};

export default App;
