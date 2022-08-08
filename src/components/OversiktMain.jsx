import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

const OversiktMain = () => {
  const { tabellLinckBlad } = useContext(MyContext);

  return (
    <>
      <div className="content-container">
        <h1 className="mb header">Oversikt</h1>
        {tabellLinckBlad &&
          tabellLinckBlad.map((item) => {
            return (
              <div key={item._id.type} className="container">
                <p className="type tabell-text">{item._id.type}</p>
                <p className="tabell-text">{item.typeCount}</p>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
          }
          .type {
            width: 13rem;
            color: grey;
            font-style: italic;
          }
        `}
      </style>
    </>
  );
};

export default OversiktMain;
