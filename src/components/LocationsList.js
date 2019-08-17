import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

import "semantic-ui-css/semantic.min.css";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);
  console.log(locations);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res.data.results);
        setLocations(res.data.results);
      })
      .catch(err => console.error(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="locations-list grid-view">
      {locations.map(location => (
        <LocationCard location={location} />
      ))}
    </section>
  );
}

