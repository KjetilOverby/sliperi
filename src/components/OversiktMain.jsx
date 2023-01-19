import React, { useContext, useState } from "react";
import { MyContext } from "../contexts/MyContext";
import tooldata from "../data/tooldata";

const OversiktMain = ({
  wasteTab,
  serviceTab,
  newbladesTab,
  retipSum,
  vrakSum,
  newBladesSum,
}) => {
  const { tabellLinckBlad, linckBlades } = useContext(MyContext);
  const nom = [
    {
      ant: `${tooldata.k22.nom}`,
      id: 1,
    },
    {
      ant: `${tooldata.k24.nom}`,
      id: 2,
    },
    {
      ant: `${tooldata.k26.nom}`,
      id: 3,
    },
    {
      ant: `${tooldata.k28.nom}`,
      id: 4,
    },
    {
      ant: `${tooldata.k30.nom}`,
      id: 5,
    },
    {
      ant: `${tooldata.k32.nom}`,
      id: 6,
    },
    {
      ant: `${tooldata.nBlad.nom}`,
      id: 7,
    },
    {
      ant: `${tooldata.vs66h.nom}`,
      id: 8,
    },
    {
      ant: `${tooldata.vs66hF.nom}`,
      id: 9,
    },
    {
      ant: `${tooldata.vs66v.nom}`,
      id: 10,
    },
    {
      ant: `${tooldata.vs66vF.nom}`,
      id: 11,
    },
    {
      ant: 0,
      id: 12,
    },
    {
      ant: 0,
      id: 13,
    },
    {
      ant: `${tooldata.jvTrimmer.nom}`,
      id: 14,
    },
    {
      ant: `${tooldata.jvEksakt.nom}`,
      id: 15,
    },
    {
      ant: `${tooldata.jvEndekapp.nom}`,
      id: 16,
    },
    {
      ant: `${tooldata.rsTrimmer.nom}`,
      id: 17,
    },
  ];

  return (
    <>
      <div className="content-container main-container">
        <h1 className="mb header">Oversikt</h1>
        <hr />
        <div className="tab-container">
          <div className="table-container">
            <h4 className="table-header">
              Oversikt linck({linckBlades && linckBlades.length})
            </h4>
            <div className="ant-container">
              <div>
                {tabellLinckBlad &&
                  tabellLinckBlad.map((item) => {
                    return (
                      <div key={item._id.type} className="blade-container">
                        <p className="type tabell-text">{item._id.type}</p>
                        <p className="tabell-text">{item.typeCount}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="nom-container">
                {nom.map((item) => {
                  return (
                    <p
                      key={item.id}
                      className="tabell-text nom-single-container">
                      {item.ant}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="table-container waste-container">
            <h4 className="table-header">Vrak denne måneden({vrakSum})</h4>
            {wasteTab &&
              wasteTab.map((item) => {
                return (
                  <div
                    key={item._id.type}
                    className="container blade-container">
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
                  <div
                    key={item._id.type}
                    className="container blade-container">
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
                  <div
                    key={item._id.type}
                    className="container blade-container">
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
          .header {
            color: var(--middle);
          }
          .main-container {
            background: var(--secondary);
          }
          .ant-container {
            display: flex;
          }
          .container {
            display: flex;
          }
          .nom-container {
            padding-left: 1rem;
          }
          .nom-single-container {
            display: flex;
            padding: 0.2rem;
            font-size: 0.8rem;
            background: var(--secondary);
            margin-bottom: 0.2rem;
            width: 1.5rem;
            border-radius: 5px;
            color: var(--text);
          }

          .table-header {
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--middle);
          }
          .tab-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
            grid-gap: 5rem;
          }
          .type {
            width: 13rem;
            color: var(--text);
            font-style: italic;
          }
          .waste-container {
          }
          @media only screen and (max-width: 1000px) {
            .container {
            }
          }
        `}
      </style>
    </>
  );
};

export default OversiktMain;
