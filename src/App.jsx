import ListGroup from "./components/ListGroup";
import BasicExample from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>

            <Route path="*" element={<Navigate replace to="/" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
