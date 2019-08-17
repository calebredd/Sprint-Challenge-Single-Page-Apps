import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm(props) {
  // TODO: Add stateful logic for query/form data
  const [query, setQuery] = useState({ text: "Rick..." });
  const [newSearch, setNewSearch] = useState("rick");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${newSearch}`)
      .then(res => {
        console.log(res.data.results);
        props.setResults(res.data.results);

      })
      .catch(err => console.error(err));
  }, [newSearch]);

  function handleInputChange(event) {
    const newQuery = Object.freeze({ text: event.target.value });
    setQuery(newQuery);
  }

  function search() {
    let newQuery = Object.freeze({ text: query.text });
    setNewSearch(newQuery.text);
  }

  return (
    <section className="search-form">
      <form onSubmit={event => (event.preventDefault(), search())}>
        <input
          onChange={handleInputChange}
          placeholder="Search..."
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
