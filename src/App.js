import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HeroComponent from "./components/HeroComponent";
import Section from "./components/Section";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroComponent />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
    </>
  );
}

export default App;
