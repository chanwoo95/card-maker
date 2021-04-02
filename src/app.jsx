import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login authService={authService} />
        </Route>
        <Route path="/app">
          <Maker />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
