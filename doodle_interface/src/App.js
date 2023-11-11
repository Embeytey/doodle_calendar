import "./App.css";
import Navbar from "./component/Navbar";
import BasicDateCalendar from "./component/Range";
import Assign from "./component/Assign";
import Welcome from "./component/Welcome";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/create" element={<BasicDateCalendar />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>

      <div></div>
    </div>
  );
}

export default App;
