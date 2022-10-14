import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DragonList from "./components/DragonList";
import AddDragon from "./components/AddDragon";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<DragonList/>} />
          <Route path="/add-dragon" element={<AddDragon />} />
          {/* <h1>Add user</h1> */}
          <Route path="/edit-dragon" />
          {/* <h1>Edit user</h1> */}
        </Routes>
      </div>
  );
}

export default App;
