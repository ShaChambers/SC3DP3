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

  return (
    <div>
      {showPerson && <h3>{person}</h3>}
      {history &&
        history.map((history) => (
          <div key={history._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showPerson ? (
                <Link className="text-light" to={`/people/${history.person}`}>
                  {history.person} <br />
                  <span style={{ fontSize: "1rem" }}>
                    {history.description}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    {history.description}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{history.description}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/history/${history._id}`}
            >
              Placeholder Text
            </Link>
          </div>
        ))}
      ;
    </div>
  );
};

export default HistoryList;
