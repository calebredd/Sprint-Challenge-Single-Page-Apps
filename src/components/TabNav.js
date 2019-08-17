import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

import "semantic-ui-css/semantic.min.css";

// TODO: Add missing tabs below
export default function TabNav({results, setResults}) {
  const [activeItem, setActiveItem] = useState("Home Page");

  return (
    <Menu tabular>
      <NavLink to="/">
        <Menu.Item
          name="Home Page"
          active={activeItem === "Home Page"}
          onClick={() => setActiveItem("Home Page")}
        >
          {" "}
          <Icon name="home" />
          Home Page
        </Menu.Item>
      </NavLink>
      <NavLink to="/character">
        <Menu.Item
          name="Characters"
          active={activeItem === "Characters"}
          onClick={() => setActiveItem("Characters")}
        >
          <Icon name="group" />
          Characters
        </Menu.Item>
      </NavLink>
      <NavLink to="/location">
        <Menu.Item
          name="Locations"
          active={activeItem === "Locations"}
          onClick={() => setActiveItem("Locations")}
        >
          <Icon name="map marker alternate" />
          Locations
        </Menu.Item>
      </NavLink>
      <NavLink to="/episode">
        <Menu.Item
          name="Episodes"
          active={activeItem === "Episodes"}
          onClick={() => setActiveItem("Episodes")}
        >
          <Icon name="video" />
          Episodes
        </Menu.Item>
      </NavLink>
      <Menu.Item>
        <SearchForm results={results} setResults={setResults} />
      </Menu.Item>
    </Menu>
  );
}
