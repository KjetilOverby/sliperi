import React from "react";
import vollmerdata from "../../data/vollmerdata";
import HistorikkCard from "./HistorikkCard";

const SlipemaskinMainPage = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="header mb">Vollmer 1300</h1>
        <img src="https://www.expo21xx.com/cipmedia/22129/17.jpg" alt="" />
        <h1 className="header mb">Historikk</h1>
        <div>
          <HistorikkCard data={vollmerdata} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default SlipemaskinMainPage;
