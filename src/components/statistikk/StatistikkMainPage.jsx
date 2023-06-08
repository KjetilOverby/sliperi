import React from "react";
import stats from "../../data/stats";

const StatistikkMainPage = ({
  wasteThisYear,
  serviceThisYear,
  newThisYear,
  currentYear,
  toolsWaste,
}) => {
  console.log(toolsWaste);
  return (
    <>
      <div className="main-container">
        <h1 className="stat-header">Statistikk årlig</h1>
        <div className="year-container">
          <div>
            <h4>Hittil i år ({currentYear})</h4>
            <p className="sub-header">Vrak:</p>
            {wasteThisYear &&
              wasteThisYear.map((item) => {
                return (
                  <div key={item.typeCount} className="tool-text-container">
                    <p className="tool-text count">{item.typeCount}</p>
                    <p className="tool-text type">{item._id.type}</p>
                  </div>
                );
              })}
          </div>
          <div>
            <h4 style={{ visibility: "hidden" }}>Hittil i år</h4>
            <p className="sub-header">Service:</p>
            {serviceThisYear &&
              serviceThisYear.map((item) => {
                return (
                  <div key={item.typeCount} className="tool-text-container">
                    <p className="tool-text count">{item.typeCount}</p>
                    <p className="tool-text type">{item._id.type}</p>
                  </div>
                );
              })}
          </div>
          <div>
            <h4 style={{ visibility: "hidden" }}>Hittil i år</h4>
            <p className="sub-header">Nye:</p>
            {newThisYear &&
              newThisYear.map((item) => {
                return (
                  <div key={item.typeCount} className="tool-text-container">
                    <p className="tool-text count">{item.typeCount}</p>
                    <p className="tool-text type">{item._id.type}</p>
                  </div>
                );
              })}
          </div>
          <div>
            <h4 style={{ visibility: "hidden" }}>Hittil i år</h4>
            <p className="sub-header">Vrak segmenter og kniver:</p>
            {toolsWaste &&
              toolsWaste.map((item) => {
                return (
                  <div key={item.typeCount} className="tool-text-container">
                    {/*  <p className="tool-text count">{item.type}</p>
                    <p className="tool-text type">{item.type}</p> */}
                  </div>
                );
              })}
          </div>
        </div>
        {stats
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <div key={item.year} className="year-container">
                <div>
                  <h4>{item.year}</h4>
                  <p className="sub-header">Vrak ({item.allVrk}):</p>
                  {item.vrkList.map((item) => {
                    return (
                      <div key={item.typeCount} className="tool-text-container">
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
                      <div key={item.typeCount} className="tool-text-container">
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
                      <div key={item.typeCount} className="tool-text-container">
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
                      <div key={item.typeCount} className="tool-text-container">
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
                      <div key={item.typeCount} className="tool-text-container">
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
            overflow: scroll;
            height: 100vh;
          }
          .year-container {
            margin-bottom: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 10rem));
            padding: 2rem;
            background: var(--primary);
            border-radius: 10px;
          }
          .sub-header {
            color: var(--middle);
            margin-bottom: 1rem;
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
