import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
