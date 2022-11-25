// import Navbar from "./Navbar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Contact from "./Contact";
// import Login from "./Login";
// import Signup from "./signup";
import './App.css';
// import Midsection from './components/Midsec';
// import Cricket from './components/Cricket';
import Cricket from "../src/components/Cricket";
import { Routes,Route } from 'react-router-dom';
// import Livescore from './components/Livescore';
import Result from './components/Result';
import Qes from './components/Qea';
import Ios from './components/Ios';

function App() {
  return (
    <div>
  <Cricket/>
  <Routes>
  < Route path="/QEA" element={<Qes/>} />
  < Route path="/Ios" element={<Ios/>} />
  </Routes>
    </div>
    // <div>
      // <Cricket/>
    // </div>
    // <Login/>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/Home" element={<Home />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/Login" element={<Login />} />
    //       <Route path="/Signup" element={<Signup />} />
    //     </Routes>
    //   </div>
  );
}
export default App;
