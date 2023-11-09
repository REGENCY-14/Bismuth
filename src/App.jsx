import Navbar from "./Navbar";
import Homepage from "./Home";
import Foot from "./foot";
import Courses from "./Courses"
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <>
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/Courses" element={<Courses />}></Route>
            <Route exact path="/About" element={<About />}></Route>
          </Routes>
        </>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
