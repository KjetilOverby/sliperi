import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import tooldata from "../../data/tooldata";

const VerktoyOversikt = () => {
  const { tools, toolsDeleted, toolsNew } = useContext(MyContext);

  const nom = [
    {
      ant: `${tooldata.redSegH.nom}`,
      id: 1,
    },
    {
      ant: `${tooldata.redSegV.nom}`,
      id: 2,
    },
    {
      ant: `${tooldata.f1a4SegH.nom}`,
      id: 3,
    },
    {
      ant: `${tooldata.f1a4SegV.nom}`,
      id: 4,
    },
    {
      ant: `${tooldata.f2H.nom}`,
      id: 5,
    },
    {
      ant: `${tooldata.f2V.nom}`,
      id: 6,
    },
    {
      ant: `${tooldata.f3H.nom}`,
      id: 7,
    },
    {
      ant: `${tooldata.f3V.nom}`,
      id: 8,
    },
    {
      ant: `${tooldata.redKniv.nom}`,
      id: 9,
    },
    {
      ant: `${tooldata.f1a4Kniv.nom}`,
      id: 10,
    },
    {
      ant: `${tooldata.f2a3Kniv.nom}`,
      id: 11,
    },
    {
      ant: `${tooldata.f3Kniv.nom}`,
      id: 12,
    },
    {
      ant: `${tooldata.hugger.nom}`,
      id: 13,
    },
  ];

  return (
    <>
      <div className="content-container main-container">
        <h1 className="header mb">Oversikt over segmenter og kniver</h1>
        <hr />
        <div className="list-container">
          <div className="tool-count-container">
            <div>
              <h4 className="mb header">Oversikt antall:</h4>
              {tools &&
                tools.map((tool) => {
                  return (
                    <div
                      key={tool.type}
                      className="tool-container blade-container"
                    >
                      <p className="type">{tool.type}</p>
                      <p className="number">{tool.antall}</p>
                    </div>
                  );
                })}
            </div>

            <div>
              <h4 className="mb header">-</h4>
              {nom.map((item) => {
                return (
                  <div key={item.id} className="nom-single-container">
                    <p>{item.ant}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="mb header">Vrak denne måneden:</h4>
            {toolsDeleted &&
              toolsDeleted.map((item) => {
                return (
                  <div key={item._id} className="blade-container">
                    <p className="type">{item.type}</p>
                    <p className="number">{item.input}</p>
                  </div>
                );
              })}
          </div>
          <div>
            <h4 className="mb header">Nye denne måneden:</h4>
            {toolsNew &&
              toolsNew.map((item) => {
                return (
                  <div key={item._id} className="blade-container">
                    <p className="type">{item.type}</p>
                    <p className="number">{item.input}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          color: var(--middle);
        }
        .tool-container {
          display: flex;
        }
        .tool-count-container {
          display: flex;
        }
        .type {
          width: 12rem;
          color: var(--text);
          font-size: 0.8rem;
          font-style: italic;
        }
        .list-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
          grid-gap: 5rem;
        }
        .nom-single-container {
          display: flex;
          padding: 0.2rem;
          font-size: 0.8rem;
          background: var(--secondary);
          margin-bottom: 0.2rem;
          width: 2rem;
          border-radius: 5px;
          color: var(--text2);
          margin-left: 1rem;
        }
        .number {
          font-size: 0.8rem;
        }
        .main-container {
          background: var(--secondary);
        }
      `}</style>
    </>
  );
};

export default VerktoyOversikt;
