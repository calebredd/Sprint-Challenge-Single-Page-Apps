import React, { state } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  // state = { activeItem: "Home Page" };

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // const { activeItem } = this.state;
  return (
    <Menu tabular>
      <Menu.Item
        name="Home Page"
        active="Home Page"
        // {activeItem === "Home Page"}
        // onClick={this.handleItemClick}
      >
        {" "}
        <Icon name="home" />
        Home Page
      </Menu.Item>
      <Menu.Item
        name="Characters"
        // active={activeItem === "Characters"}
        // onClick={this.handleItemClick}
      >
        <Icon name="smile" />
        Characters
      </Menu.Item>
      <Menu.Item
        name="Locations"
        // active={activeItem === "Locations"}
        // onClick={this.handleItemClick}
      >
        <Icon name="map marker alternate" />
        Locations
      </Menu.Item>
      <Menu.Item
        name="Episodes"
        // active={activeItem === "Episodes"}
        // onClick={this.handleItemClick}
      >
        <Icon name="tv" />
        Episodes
      </Menu.Item>
    </Menu>
  );
}
