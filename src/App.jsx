import Navbar from "./Navbar";
import Homepage from "./Home";
import Foot from "./foot";
import Courses from "./Courses"
import About from "./About";
import Apply from "./Apply";
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
            <Route exact path="/Apply" element={<Apply />}></Route>
          </Routes>
        </>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
