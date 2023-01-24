import React from "react";
import stats from "../data/stats";

const StatistikkMainPage = () => {
  return (
    <>
      <div className="main-container">
        <h1 className="stat-header">Statistikk årlig</h1>
        {stats.map((item) => {
          return (
            <div className="year-container">
              <div>
                <h4>{item.year}</h4>
                <p className="sub-header">Vrak ({item.allVrk}):</p>
                {item.vrkList.map((item) => {
                  return (
                    <div className="tool-text-container">
                      <p className="tool-text count">{item.typeCount}</p>
                      <p className="tool-text type">{item._id.type}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4 style={{ visibility: "hidden" }}>{item.year}</h4>
                <p className="sub-header">Service ({item.allSrv}):</p>
                {item.srvList.map((item) => {
                  return (
                    <div className="tool-text-container">
                      <p className="tool-text count">{item.typeCount}</p>
                      <p className="tool-text type">{item._id.type}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4 style={{ visibility: "hidden" }}>{item.year}</h4>
                <p className="sub-header">Nye blad ({item.allNew}):</p>
                {item.newList.map((item) => {
                  return (
                    <div className="tool-text-container">
                      <p className="tool-text count">{item.typeCount}</p>
                      <p className="tool-text type">{item._id.type}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4 style={{ visibility: "hidden" }}>{item.year}</h4>
                <p className="sub-header">Vrak segmenter og kniver:</p>
                {item.toolsVrak.map((item) => {
                  return (
                    <div className="tool-text-container">
                      <p className="tool-text count">{item.ant}</p>
                      <p className="tool-text type">{item.type}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4 style={{ visibility: "hidden" }}>{item.year}</h4>
                <p className="sub-header">Nye segmenter og kniver:</p>
                {item.toolsNew.map((item) => {
                  return (
                    <div className="tool-text-container">
                      <p className="tool-text count">{item.ant}</p>
                      <p className="tool-text type">{item.type}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .main-container {
            grid-area: content;
            background: var(--secondary);
            padding: 1rem;
          }
          .year-container {
            margin-bottom: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 10rem));
            padding: 2rem;
            background: var(--secondary2);
          }
          .sub-header {
            color: var(--middle);
          }
          .stat-header {
            color: var(--middle);
            margin-bottom: 1rem;
          }
          .tool-text {
            font-size: 0.8rem;
            color: var(--text2);
            font-style: italic;
          }
          .tool-text-container {
            display: flex;
          }
          .count {
            width: 1.8rem;
          }
          h4 {
            color: var(--middle);
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default StatistikkMainPage;
