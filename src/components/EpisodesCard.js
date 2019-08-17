import React from "react";
import { Card } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

export default function EpisodesCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {props.episode.episode}: {props.episode.name}
        </Card.Header>
        <Card.Description>Air Date: {props.episode.air_date}</Card.Description>
      </Card.Content>
    </Card>
  );
}
