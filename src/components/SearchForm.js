import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [query, setQuery] = useState({ text: "Search..." });

  function handleInputChange(event) {
    const newQuery = Object.freeze({ text: event.target.value });
    setQuery(newQuery);
  }

  function onSearch() {
    const newQuery = Object.freeze({ text: query.text });
    if (onSearch) onSearch(newQuery);
  }

  return (
    <section className="search-form">
      <form onSubmit={event => (event.preventDefault(), onSearch())}>
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
