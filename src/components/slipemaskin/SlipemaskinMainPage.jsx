import React, { useState, useEffect } from "react";
import vollmerdata from "../../data/vollmerdata";
import FilterComponent from "./FilterComponent";
import HistorikkCard from "./HistorikkCard";
import { CgArrowRightO } from "react-icons/cg";

const SlipemaskinMainPage = () => {
  const [filterInput, setFilterInput] = useState("Service");
  const [result, setResult] = useState();

  useEffect(() => {
    setResult(vollmerdata.filter((item) => item.tag === filterInput));
  }, [filterInput]);

  return (
    <>
      <div className="content-container container">
        <h1 className="header mb">Vollmer CHC 1300</h1>
        <div className="img-container">
          <img
            className="img"
            src="https://www.vollmer-group.com/fileadmin/_processed_/3/1/csm_VOLLMER_Kreissaegen_CHX840_ac083b1e93.png"
            alt="Slipemaskin"
          />
        </div>
        <h1 className="header mb">Historikk</h1>
        <FilterComponent input={setFilterInput} title={filterInput} />
        <div className="list-box">
          {result &&
            result.map((item) => {
              return (
                <div key={item.title} className="div">
                  <a href={`#${item.title}`} className="li">
                    <CgArrowRightO style={{ marginRight: "1rem" }} />
                    <span className="span">{item.date} </span> {item.title}
                  </a>
                </div>
              );
            })}
        </div>
        <div>
          <HistorikkCard data={result} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: var(--text);
            scroll-behavior: smooth;
          }
          .img {
            width: 100%;
          }
          .img-container {
            width: 40rem;
            margin: 5rem 0;
          }
          .span {
            color: var(--middle);
            width: 6rem;
            display: block;
          }
          .list-box {
            background: var(--primary);
            padding: 1rem;
            margin: 2rem 0;
            border-radius: 5px;
          }
          .li {
            color: var(--text);
            display: flex;
          }
          .div {
            margin-bottom: 1rem;
          }
          .div:last-child {
            margin-bottom: 0;
            color: blue;
          }
          .ul {
          }
          @media only screen and (max-width: 1000px) {
            .img-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default SlipemaskinMainPage;
