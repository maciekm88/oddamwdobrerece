import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Menu from "./components/Menu";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
