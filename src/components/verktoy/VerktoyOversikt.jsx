import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

const VerktoyOversikt = () => {
  const { tools } = useContext(MyContext);

  const nom = [
    {
      ant: 100,
      id: 1,
    },
    {
      ant: 100,
      id: 2,
    },
    {
      ant: 65,
      id: 3,
    },
    {
      ant: 65,
      id: 4,
    },
    {
      ant: 25,
      id: 5,
    },
    {
      ant: 25,
      id: 6,
    },
    {
      ant: 25,
      id: 7,
    },
    {
      ant: 25,
      id: 8,
    },
    {
      ant: 160,
      id: 9,
    },
    {
      ant: 240,
      id: 10,
    },
    {
      ant: 40,
      id: 11,
    },
    {
      ant: 30,
      id: 12,
    },
    {
      ant: 16,
      id: 13,
    },
  ];

  return (
    <>
      <div className="content-container main-container">
        <h1 className="header mb">Oversikt over segmenter og kniver</h1>
        <hr />
        <div className="list-container">
          <div>
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
            {nom.map((item) => {
              return (
                <div key={item.id} className="nom-single-container">
                  <p>{item.ant}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .tool-container {
          display: flex;
        }
        .type {
          width: 12rem;
          color: var(--text);
          font-size: 0.8rem;
          font-style: italic;
        }
        .list-container {
          display: flex;
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
          background: var(--text);
        }
      `}</style>
    </>
  );
};

export default VerktoyOversikt;
