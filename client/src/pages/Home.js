import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";

import HistoryList from "../components/HistoryList";
// import HistoryForm from "../components/HistoryForm";
import { QUERY_HISTORIES } from "../utils/queries";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const { loading, data } = useQuery(QUERY_HISTORIES);
  const history = data?.history || [];
  useEffect(() => {
    console.log(history);
  }, [data?.history]);
  console.log(history);
  return (
    <Row>
      <Navbar>
        <Container>
          <h1>Noir</h1>
        </Container>

        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/Login">Login</Navbar.Brand>
        <Navbar.Brand href="/signup">Register</Navbar.Brand>
        <Navbar.Brand href="/Login">Sign Out</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <div>{/* <ThoughtForm /> */}</div>
      <Col sm={12}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <HistoryList history={history} title="Some Feed for Thought(s)..." />
        )}
      </Col>
    </Row>
  );
};

export default Home;
