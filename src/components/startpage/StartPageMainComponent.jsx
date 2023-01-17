import React, { useContext } from "react";
import ShortButtons from "./ShortButtons";
import { MyContext } from "../../contexts/MyContext";

import { FcSearch } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcNews } from "react-icons/fc";

const StartPageMainComponent = () => {
  const { linckBlades, tabellLinckBlad, tools } = useContext(MyContext);

  return (
    <>
      <div className="content-container main-container">
        <div className="bestill-container">
          <p className="bestill-header">Må bestilles:</p>
          {tabellLinckBlad && tabellLinckBlad[0].typeCount < 15 && (
            <p className="bestill-tools">
              {tabellLinckBlad[0]._id.type}, {15 - tabellLinckBlad[0].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[1].typeCount < 20 && (
            <p className="bestill-tools">
              {tabellLinckBlad[1]._id.type}, {20 - tabellLinckBlad[1].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[2].typeCount < 65 && (
            <p className="bestill-tools">
              {tabellLinckBlad[2]._id.type}, {65 - tabellLinckBlad[2].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[3].typeCount < 65 && (
            <p className="bestill-tools">
              {tabellLinckBlad[3]._id.type}, {65 - tabellLinckBlad[3].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[4].typeCount < 30 && (
            <p className="bestill-tools">
              {tabellLinckBlad[4]._id.type}, {30 - tabellLinckBlad[4].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[5].typeCount < 70 && (
            <p className="bestill-tools">
              {tabellLinckBlad[5]._id.type}, {70 - tabellLinckBlad[5].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[6].typeCount < 25 && (
            <p className="bestill-tools">
              {tabellLinckBlad[6]._id.type}, {25 - tabellLinckBlad[6].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[7].typeCount < 25 && (
            <p className="bestill-tools">
              {tabellLinckBlad[7]._id.type}, {25 - tabellLinckBlad[7].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[8].typeCount < 25 && (
            <p className="bestill-tools">
              {tabellLinckBlad[8]._id.type}, {25 - tabellLinckBlad[8].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[9].typeCount < 25 && (
            <p className="bestill-tools">
              {tabellLinckBlad[9]._id.type}, {25 - tabellLinckBlad[9].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[10].typeCount < 25 && (
            <p className="bestill-tools">
              {tabellLinckBlad[10]._id.type},{" "}
              {25 - tabellLinckBlad[10].typeCount}
              stk
            </p>
          )}
          {/*   {tabellLinckBlad && tabellLinckBlad[11].typeCount < 25 && (
            <p className='bestill-tools'>{tabellLinckBlad[11]._id.type}</p>
          )}
          {tabellLinckBlad && tabellLinckBlad[12].typeCount < 25 && (
            <p className='bestill-tools'>{tabellLinckBlad[12]._id.type}</p>
          )} */}
          {tabellLinckBlad && tabellLinckBlad[13].typeCount < 60 && (
            <p className="bestill-tools">
              {tabellLinckBlad[13]._id.type},{" "}
              {60 - tabellLinckBlad[13].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[14].typeCount < 5 && (
            <p className="bestill-tools">
              {tabellLinckBlad[14]._id.type},{" "}
              {5 - tabellLinckBlad[14].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[15].typeCount < 5 && (
            <p className="bestill-tools">
              {tabellLinckBlad[15]._id.type},{" "}
              {5 - tabellLinckBlad[15].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[16].typeCount < 10 && (
            <p className="bestill-tools">
              {tabellLinckBlad[16]._id.type},{" "}
              {15 - tabellLinckBlad[16].typeCount}
              stk
            </p>
          )}

          {tools && tools[0].antall < 60 && (
            <p className="bestill-tools">
              {tools[0].type}, {60 - tools[0].antall}
              stk
            </p>
          )}
          {tools && tools[1].antall < 60 && (
            <p className="bestill-tools">
              {tools[1].type}, {60 - tools[1].antall}
              stk
            </p>
          )}
          {tools && tools[2].antall < 65 && (
            <p className="bestill-tools">
              {tools[2].type}, {65 - tools[2].antall}
              stk
            </p>
          )}
          {tools && tools[3].antall < 65 && (
            <p className="bestill-tools">
              {tools[3].type}, {65 - tools[3].antall}
              stk
            </p>
          )}
          {tools && tools[4].antall < 25 && (
            <p className="bestill-tools">
              {tools[4].type}, {25 - tools[4].antall}
              stk
            </p>
          )}
          {tools && tools[5].antall < 25 && (
            <p className="bestill-tools">
              {tools[5].type}, {25 - tools[5].antall}
              stk
            </p>
          )}
          {tools && tools[6].antall < 25 && (
            <p className="bestill-tools">
              {tools[6].type}, {25 - tools[6].antall}
              stk
            </p>
          )}
          {tools && tools[7].antall < 25 && (
            <p className="bestill-tools">
              {tools[7].type}, {25 - tools[7].antall}
              stk
            </p>
          )}
          {tools && tools[8].antall < 180 && (
            <p className="bestill-tools">
              {tools[8].type}, {180 - tools[8].antall}
              stk
            </p>
          )}
          {tools && tools[9].antall < 240 && (
            <p className="bestill-tools">
              {tools[9].type}, {240 - tools[9].antall}
              stk
            </p>
          )}
          {tools && tools[10].antall < 40 && (
            <p className="bestill-tools">
              {tools[10].type}, {40 - tools[10].antall}
              stk
            </p>
          )}
          {tools && tools[11].antall < 30 && (
            <p className="bestill-tools">
              {tools[11].type}, {30 - tools[11].antall}
              stk
            </p>
          )}
          {tools && tools[12].antall < 16 && (
            <p className="bestill-tools">
              {tools[12].type}, {16 - tools[12].antall}
              stk
            </p>
          )}
        </div>
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
          .bestill-container {
            position: absolute;
            left: 16rem;
            top: 1rem;
            color: white;
          }
          .bestill-header {
            font-style: italic;
            font-size: 0.8rem;
          }
          .bestill-tools {
            font-size: 0.8rem;
          }
          .main-container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4740&q=80");
            display: grid;
            place-items: center;
            background-size: cover;
            scrollbar-width: none;
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
