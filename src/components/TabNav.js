import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  const [activeItem, setActiveItem] = useState("Home Page");

  return (
    <Menu tabular>
      <Menu.Item
        name="Home Page"
        active={activeItem === "Home Page"}
        onClick={()=>setActiveItem("Home Page")}
      >
        {" "}
        <Icon name="home" />
        Home Page
      </Menu.Item>
      <Menu.Item
        name="Characters"
        active={activeItem === "Characters"}
        onClick={()=>setActiveItem("Characters")}
      >
        <Icon name="smile" />
        Characters
      </Menu.Item>
      <Menu.Item
        name="Locations"
        active={activeItem === "Locations"}
        onClick={()=>setActiveItem("Locations")}
      >
        <Icon name="map marker alternate" />
        Locations
      </Menu.Item>
      <Menu.Item
        name="Episodes"
        active={activeItem === "Episodes"}
        onClick={()=>setActiveItem("Episodes")}
      >
        <Icon name="tv" />
        Episodes
      </Menu.Item>
    </Menu>
  );
}
