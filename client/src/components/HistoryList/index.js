import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Row>
      {history &&
        history.map((history) => (
          <Col xs={12} lg={4}>
            <Card style={{ marginTop: 10 }} key={history._id}>
              <Card.Body>
                <Card.Title>{history.person}</Card.Title>
                <Card.Text>{history.description}</Card.Text>
                <Card.Link href={history.link}>Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default HistoryList;
