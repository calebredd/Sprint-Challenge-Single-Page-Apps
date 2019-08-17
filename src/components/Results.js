import React from "react";
import { Card } from "semantic-ui-react";
export default function Results({ results, setResults }) {
  if (results.length > 0) {
    return (
      <section className="search-list grid-view">
        <strong>Search Results:</strong>
        <p>
          {results.map(result => (
            <span>
              Name:{result.name} Status:{result.status} Species:
              {result.species},{" "}
            </span>
          ))}
        </p>
      </section>
    );
  } else {
    return <div> No Results for that Query!</div>;
  }
}
