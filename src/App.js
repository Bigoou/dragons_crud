import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DragonList from "./components/DragonList";
import EditDragon from './components/EditDragon';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<DragonList/>} />
          <Route path="/add-dragon" />
          {/* <h1>Add user</h1> */}
          <Route path="/edit-dragon" element={<EditDragon/>} />
          {/* <h1>Edit user</h1> */}
        </Routes>
      </div>
  );
}

export default App;
