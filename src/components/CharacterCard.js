import React from "react";
import { Card } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

export default function CharacterCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Description>Home Planet: {props.character.origin.name}<br/>
        Species: {props.character.species}<br/>
        {/* First Episode:{props.character.episode[0]} */}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
