import { Card, ListGroup } from "react-bootstrap";

import { DARK_MODE_CLASSES } from "../types";
import React from "react";

interface ListCardProps {
  title: string;
  listItems: string[];
}

const ListCard: React.FC<ListCardProps> = (props: ListCardProps) => {
  const { title, listItems } = props;
  return (
    <Card className={DARK_MODE_CLASSES}>
      <Card.Body>
        <Card.Header>{title}</Card.Header>
        <ListGroup variant="flush">
          {listItems.map((item) => {
            return (
              <ListGroup.Item className={DARK_MODE_CLASSES} key={item}>
                {item}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ListCard;
