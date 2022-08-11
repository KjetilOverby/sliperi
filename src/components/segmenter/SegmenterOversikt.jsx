import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import ToolsOverviewCard from "../common/ToolsOverviewCard";
import v40segmentH from "../../../assets/segmenter/v40segmentH.jpg";

const SegmenterOversikt = () => {
  const { tools } = useContext(MyContext);
  return (
    <>
      <div className="content-container">
        <h1 className="header mb">Oversikt over segmenter og kniver</h1>
        {tools &&
          tools.map((tool) => {
            return (
              <div className="tool-container">
                <p className="type">{tool.type}</p>
                <p className="number">{tool.antall}</p>
              </div>
            );
          })}
        <div></div>
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

export default SegmenterOversikt;
