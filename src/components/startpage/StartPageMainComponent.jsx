import React, { useContext } from "react";
import ShortButtons from "./ShortButtons";
import { MyContext } from "../../contexts/MyContext";

import { FcSearch } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";

const StartPageMainComponent = () => {
  const { linckBlades } = useContext(MyContext);
  return (
    <>
      <div className="content-container">
        <h1 className="header">Verktøyregister</h1>
        <div className="btn-container">
          <ShortButtons
            icon={<FcSearch style={{ fontSize: "5rem" }} />}
            title="SØK"
            text={`Søk i ${linckBlades && linckBlades.length} blader`}
            link="/search"
          />
          <ShortButtons
            icon={<FcAddDatabase style={{ fontSize: "5rem" }} />}
            title="NYE BLAD"
            text={`Legg til nye blad`}
            link="/newblades"
          />
          <ShortButtons
            icon={<FcViewDetails style={{ fontSize: "5rem" }} />}
            title="OVERSIKT"
            text={`Oversikt over blader`}
            link="oversikt"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .btn-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(12rem, 12rem));
            margin-top: 5rem;
          }
          @media only screen and (max-width: 1000px) {
            .btn-container {
              grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
              place-items: center;
              grid-gap: 2rem;
              padding: 2rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPageMainComponent;
