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
    return <h3>Nothings here?...Yet</h3>;
  }

  return (
    <div>
      {showPerson && <h3>{person}</h3>}
      {showDescription && <h3>{description}</h3>}
    </div>
  );
};
export default HistoryList;
