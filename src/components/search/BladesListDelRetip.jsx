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
          <p>Antall: {linckBladesDeleted && linckBladesDeleted.length}</p>
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
        <div>
          <h2 className="header header-search-component mb mt">
            Omloddede blad denne måneden
          </h2>
          <p>Antall: {linckServiceBlades && linckServiceBlades.length}</p>
          {linckServiceBlades &&
            linckServiceBlades.map((retip) => {
              return (
                <div key={retip._id} className="blade-container2">
                  <p className="text">{`${retip.serial}, ${
                    retip.type
                  }, ${dateFormat(retip.retipDate, "dd.mm.yyyy HH:MM")}`}</p>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-left: 5rem;
          }
          .text {
            font-size: 0.8rem;
            font-style: italic;
          }
          .header-search-component {
            font-size: 1.2rem;
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
