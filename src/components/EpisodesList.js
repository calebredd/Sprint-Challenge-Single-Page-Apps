import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodesCard from "./EpisodesCard";

import "semantic-ui-css/semantic.min.css";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);
  console.log(episodes);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res.data.results);
        setEpisodes(res.data.results);
      })
      .catch(err => console.error(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="episodes-list grid-view">
      {episodes.map(episode => (
        <EpisodesCard episode={episode} />
      ))}
    </section>
  );
}
