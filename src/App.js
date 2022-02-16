import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from 'react';
import FavList from './components/FavList';

function App() {
  const [favoriteList, SetFavList] = useState([]);


  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/favorite`);

      const data = await res.json();
      SetFavList(data);

    } catch (error) {
      console.log("error", error);
    }

  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList favoriteList={favoriteList} />} />
      </Routes>
    </>
  );
}

export default App;
