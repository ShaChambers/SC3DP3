import React from "react";
import { useQuery } from "@apollo/client";

import HistoryList from "../components/HistoryList";
import HistoryForm from "../components/HistoryForm";

import { QUERY_HISTORY } from "../utils/queries";

const Home = () => {
  const home = "Black History in Tech...!";
  const { loading, data } = useQuery(QUERY_HISTORY);
  const history = data?.history || [];

  return (
    <div className="justify-center">
      <h1>{home}</h1>
    </div>
  );
};

export default Home;
