import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Row from "react-bootstrap/Row";

import HistoryList from "../components/HistoryList";
// import HistoryForm from "../components/HistoryForm";
import { QUERY_HISTORIES } from "../utils/queries";
import Col from "react-bootstrap/esm/Col";

const Home = () => {
  const { loading, data } = useQuery(QUERY_HISTORIES);
  const history = data?.history || [];
  useEffect(() => {
    console.log(history);
  }, [data?.history]);
  console.log(history);
  return (
    <Row>
      <div
        className="col-12 col-md-10 mb-3 p-3"
        style={{ border: "1px dotted #1a1a1a" }}
      >
        {/* <ThoughtForm /> */}
      </div>
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
