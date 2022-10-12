import React, { useContext } from "react";
import ShortButtons from "./ShortButtons";
import { MyContext } from "../../contexts/MyContext";

import { FcSearch } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcNews } from "react-icons/fc";

const StartPageMainComponent = () => {
  const { linckBlades } = useContext(MyContext);
  return (
    <>
      <div className="content-container main-container">
        <h1 className="header main-header">Verktøyregister</h1>
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
            icon={<FcNews style={{ fontSize: "5rem" }} />}
            title="OVERSIKT"
            text={`Oversikt over blader`}
            link="/oversikt"
          />
          <ShortButtons
            icon={<FcCalendar style={{ fontSize: "5rem" }} />}
            title="DATOSØK"
            text={`Søk på en gitt periode`}
            link="/datesearch"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .btn-container {
            display: flex;
            width: 70%;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .main-container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://wallpaperaccess.com/full/1303182.jpg");
            display: grid;
            place-items: center;
            background-size: cover;
          }
          .main-header {
            color: var(--text);
            font-size: 6rem;
          }
          @media only screen and (max-width: 1000px) {
            .btn-container {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
              place-items: center;
              grid-gap: 2rem;
              padding: 2rem 0;
              width: auto;
            }
            .main-header {
              font-size: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPageMainComponent;
