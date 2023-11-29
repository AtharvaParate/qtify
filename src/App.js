import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HeroComponent from "./components/HeroComponent";
import Section from "./components/Section";
import FilterSection from "./components/FilterSection";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then((res) => {
      setNewAlbums(res.data);
    });
    axios.get(`${ENDPOINT}songs`).then((res) => {
      setSongs(res.data);
      setFilteredSongs(res.data);
    });
    axios.get(`${ENDPOINT}genres`).then((res) => {
      setGenres([{ key: "all", label: "All" }, ...res.data.data]);
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroComponent />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
      <FilterSection
        title="Songs"
        data={filteredSongs}
        filters={genres}
        executeFilter={(genre) => {
          if (genre === "all") {
            setFilteredSongs(songs);
          } else {
            setFilteredSongs(songs.filter((song) => song.genre.key === genre));
          }
        }}
      />
    </>
  );
}

export default App;
