import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import dateFormat, { masks } from "dateformat";

const BladesListDelRetip = () => {
  const { linckBladesDeleted, linckServiceBlades } = useContext(MyContext);
  return (
    <>
      <div className="container">
        <div>
          <h2 className="header header-search-component mb">
            Vrakede blad denne måneden
          </h2>

          <p className="sub-header mb">
            Antall: {linckBladesDeleted && linckBladesDeleted.length}
          </p>
          {linckBladesDeleted &&
            linckBladesDeleted.map((waste) => {
              return (
                <div key={waste._id} className="blade-container2">
                  <p className="text">{`${waste.serial}, ${waste.type}, oml: ${
                    waste.wasteNumberOfRetip
                  }, ${dateFormat(waste.wasteDate, "dd.mm.yyyy HH:MM")}`}</p>
                </div>
              );
            })}
        </div>
        <hr className="hr" />
        <div>
          <h2 className="header header-search-component mb mt">
            Omloddede blad denne måneden
          </h2>

          <p className="sub-header mb">
            Antall: {linckServiceBlades && linckServiceBlades.length}
          </p>
          {linckServiceBlades &&
            linckServiceBlades.map((retip) => {
              console.log(retip);
              return (
                <div key={retip._id} className="blade-container2">
                  <p className="text">{`${retip.serial}, ${
                    retip.type
                  }, ${dateFormat(retip.serviceDate, "dd.mm.yyyy HH:MM")}`}</p>
                </div>
              );
            })}
          <hr className="hr" />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-left: 5rem;
            background: var(--primary);
            padding: 1rem;
            min-height: 50rem;
          }
          .hr {
            border-top: solid 1px var(--secondary);
            border-bottom: none;
            border-right: none;
            border-left: none;
            margin-top: 0.5rem;
          }

          .text {
            font-size: 0.8rem;
            font-style: italic;
          }
          .header-search-component {
            font-size: 1rem;
            color: var(--text2);
            font-weight: 300;
          }
          .sub-header {
            color: var(--text);
          }
          @media only screen and (max-width: 1000px) {
            .container {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default BladesListDelRetip;
