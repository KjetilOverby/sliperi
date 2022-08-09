import React, { useContext, useState } from "react";
import { MyContext } from "../contexts/MyContext";

const OversiktMain = ({
  wasteTab,
  serviceTab,
  newbladesTab,
  retipSum,
  vrakSum,
  newBladesSum,
}) => {
  const { tabellLinckBlad, linckBlades } = useContext(MyContext);

  return (
    <>
      <div className="content-container">
        <h1 className="mb header">Oversikt</h1>
        <div className="tab-container">
          <div className="table-container">
            <h4 className="table-header">
              Oversikt linck({linckBlades && linckBlades.length})
            </h4>
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
          <div className="table-container waste-container">
            <h4 className="table-header">Vrak denne måneden({vrakSum})</h4>
            {wasteTab &&
              wasteTab.map((item) => {
                return (
                  <div key={item._id.type} className="container">
                    <p className="type tabell-text">{item._id.type}</p>
                    <p className="tabell-text">{item.typeCount}</p>
                  </div>
                );
              })}
          </div>
          <div className="table-container waste-container">
            <h4 className="table-header">Service denne måneden({retipSum})</h4>
            {serviceTab &&
              serviceTab.map((item) => {
                return (
                  <div key={item._id.type} className="container">
                    <p className="type tabell-text">{item._id.type}</p>
                    <p className="tabell-text">{item.typeCount}</p>
                  </div>
                );
              })}
          </div>
          <div className="table-container waste-container">
            <h4 className="table-header">Nye denne måneden({newBladesSum})</h4>
            {newbladesTab &&
              newbladesTab.map((item) => {
                return (
                  <div key={item._id.type} className="container">
                    <p className="type tabell-text">{item._id.type}</p>
                    <p className="tabell-text">{item.typeCount}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
          }
          .table-container {
          }
          .table-header {
            font-weight: 600;
            margin-bottom: 1rem;
          }
          .tab-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
            grid-gap: 5rem;
          }
          .type {
            width: 13rem;
            color: grey;
            font-style: italic;
          }
          .waste-container {
          }
        `}
      </style>
    </>
  );
};

export default OversiktMain;
