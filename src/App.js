import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DragonList from "./components/DragonList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/">
            <DragonList />
          </Route>
          <Route path="/add-dragon">
            <h1>Add user</h1>
          </Route>
          <Route path="/edit-dragon">
            <h1>Edit user</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
