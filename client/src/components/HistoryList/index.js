import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const HistoryList = ({
  history,
  person,
  description,
  showPerson = true,
  showDescription = true,
}) => {
  if (!history.length) {
    return <h3>Nothing here... Yet</h3>;
  }

  return (
    <div>
      {history &&
        history.map((history) => (
          <Card key={history._id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{history.person}</Card.Title>
              <Card.Text>{history.description}</Card.Text>
              <Card.Link href={history.link}>Learn More</Card.Link>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default HistoryList;
