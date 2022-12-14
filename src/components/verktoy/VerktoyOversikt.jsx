import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

const VerktoyOversikt = () => {
  const { tools, toolsDeleted, toolsNew } = useContext(MyContext);

  const nom = [
    {
      ant: 60,
      id: 1,
    },
    {
      ant: 60,
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
      ant: 180,
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
          <div className="tool-count-container">
            <div>
              <h4 className="mb header">Oversikt antall:</h4>
              {tools &&
                tools.map((tool) => {
                  return (
                    <div
                      key={tool.type}
                      className="tool-container blade-container">
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
          background: var(--text);
        }
      `}</style>
    </>
  );
};

export default VerktoyOversikt;
