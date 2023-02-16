import React from "react";
import { Link } from "react-router-dom";

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

  // _id
  //     description
  //     person
  //     link

  return (
    <div>
      {history &&
        history.map((history) => (
          <div key={history._id} className="card mb-3">
            <h3>Hello</h3>
          </div>
        ))}
    </div>
  );
};

export default HistoryList;
