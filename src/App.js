import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import SearchBox from "./components/SearchBox";
import Button from "./components/Button";
import HeroComponent from "./components/HeroComponent";
import CardComponent from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <Card />
    </>
  );
}

export default App;
