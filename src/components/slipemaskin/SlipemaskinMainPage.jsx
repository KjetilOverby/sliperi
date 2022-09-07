import React from "react";
import vollmerdata from "../../data/vollmerdata";
import HistorikkCard from "./HistorikkCard";

const SlipemaskinMainPage = () => {
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
        <div>
          <HistorikkCard data={vollmerdata} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: var(--text);
          }
          .img {
            width: 100%;
          }
          .img-container {
            width: 40rem;
            margin: 5rem 0;
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
