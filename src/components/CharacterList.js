import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

import "semantic-ui-css/semantic.min.css";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  console.log(characters);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => console.error(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="episodes-list grid-view">
      {characters.map(character => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}
