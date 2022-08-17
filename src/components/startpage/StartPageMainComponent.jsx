import React, { useContext } from "react";
import ShortButtons from "./ShortButtons";
import { MyContext } from "../../contexts/MyContext";
import Link from "next/link";

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
        `}
      </style>
    </>
  );
};

export default StartPageMainComponent;
