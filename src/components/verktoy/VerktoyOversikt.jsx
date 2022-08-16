import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

const VerktoyOversikt = () => {
  const { tools } = useContext(MyContext);
  return (
    <>
      <div className="content-container">
        <h1 className="header mb">Oversikt over segmenter og kniver</h1>
        {tools &&
          tools.map((tool) => {
            return (
              <div key={tool.type} className="tool-container blade-container">
                <p className="type">{tool.type}</p>
                <p className="number">{tool.antall}</p>
              </div>
            );
          })}
      </div>
      <style jsx>{`
        .tool-container {
          display: flex;
        }
        .type {
          width: 12rem;
          color: grey;
          font-size: 0.8rem;
          font-style: italic;
        }
        .number {
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};

export default VerktoyOversikt;
