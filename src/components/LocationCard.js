import React from "react";
import { Card } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

export default function LocationCard(props) {
  const { name, type, dimension, residents } = props.location;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          Type: {type}
          <br />
          Dimension: {dimension}
          <br />
          Residents: {residents}
          <br />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
