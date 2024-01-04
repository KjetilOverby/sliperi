import React, { useContext } from "react";
import ShortButtons from "./ShortButtons";
import { MyContext } from "../../contexts/MyContext";

import { FcSearch } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import tooldata from "../../data/tooldata";

const StartPageMainComponent = () => {
  const { linckBlades, tabellLinckBlad, tools } = useContext(MyContext);

  return (
    <>
      <div className="content-container main-container">
        <h1 className="header main-header">Verktøyregister</h1>

        <div className="bestill-container">
          <p className="bestill-header">Må bestilles:</p>
          {tabellLinckBlad && tabellLinckBlad[0].typeCount < 15 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.k22.art}, {tabellLinckBlad[0]._id.type},{" "}
              {tooldata.k22.nom - tabellLinckBlad[0].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[1].typeCount < 10 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.k24.art}, {tabellLinckBlad[1]._id.type},{" "}
              {tooldata.k24.nom - tabellLinckBlad[1].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[2].typeCount < 65 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.k26.art}, {tabellLinckBlad[2]._id.type},{" "}
              {tooldata.k26.nom - tabellLinckBlad[2].typeCount}
              stk
            </p>
          )}

          {tabellLinckBlad && tabellLinckBlad[3].typeCount < 72 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.k28.art}, {tabellLinckBlad[3]._id.type},{" "}
              {tooldata.k28.nom - tabellLinckBlad[3].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[4].typeCount < 30 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.k30.art}, {tabellLinckBlad[4]._id.type},{" "}
              {tooldata.k30.nom - tabellLinckBlad[4].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[5].typeCount < 70 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.k32.art}, {tabellLinckBlad[5]._id.type},{" "}
              {tooldata.k32.nom - tabellLinckBlad[5].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[6].typeCount < 25 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.nBlad.art}, {tabellLinckBlad[6]._id.type},{" "}
              {tooldata.nBlad.nom - tabellLinckBlad[6].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[7].typeCount < 25 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.vs66h.art}, {tabellLinckBlad[7]._id.type},{" "}
              {tooldata.vs66h.nom - tabellLinckBlad[7].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[8].typeCount < 25 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.vs66hF.art}, {tabellLinckBlad[8]._id.type},{" "}
              {tooldata.vs66hF.nom - tabellLinckBlad[8].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[9].typeCount < 25 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.vs66v.art}, {tabellLinckBlad[9]._id.type},{" "}
              {tooldata.vs66v.nom - tabellLinckBlad[9].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[10].typeCount < 25 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.vs66vF.art}, {tabellLinckBlad[10]._id.type},{" "}
              {tooldata.vs66vF.nom - tabellLinckBlad[10].typeCount}
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
              Art.nr: {tooldata.jvTrimmer.art}, {tabellLinckBlad[13]._id.type},{" "}
              {tooldata.jvTrimmer.nom - tabellLinckBlad[13].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[14].typeCount < 5 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.jvEksakt.art}, {tabellLinckBlad[14]._id.type},{" "}
              {tooldata.jvEksakt.nom - tabellLinckBlad[14].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[15].typeCount < 5 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.jvEndekapp.art}, {tabellLinckBlad[15]._id.type},{" "}
              {tooldata.jvEndekapp.nom - tabellLinckBlad[15].typeCount}
              stk
            </p>
          )}
          {tabellLinckBlad && tabellLinckBlad[16].typeCount < 10 && (
            <p className="bestill-tools">
              Art.nr: {tooldata.rsTrimmer.art}, {tabellLinckBlad[16]._id.type},{" "}
              {tooldata.rsTrimmer.nom - tabellLinckBlad[16].typeCount}
              stk
            </p>
          )}
          {tools && tools[0].antall < tooldata.redSegH.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[0].art}, {tools[0].type},{" "}
              {tooldata.redSegH.nom - tools[0].antall}
              stk
            </p>
          )}
          {tools && tools[1].antall < tooldata.redSegV.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[1].art}, {tools[1].type},{" "}
              {tooldata.redSegV.nom - tools[1].antall}
              stk
            </p>
          )}
          {tools && tools[2].antall < tooldata.f1a4SegH.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[2].art}, {tools[2].type},{" "}
              {tooldata.f1a4SegH.nom - tools[2].antall}
              stk
            </p>
          )}
          {tools && tools[3].antall < tooldata.f1a4SegV.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[3].art}, {tools[3].type},{" "}
              {tooldata.f1a4SegV.nom - tools[3].antall}
              stk
            </p>
          )}
          {tools && tools[4].antall < tooldata.f2H.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[4].art}, {tools[4].type},{" "}
              {tooldata.f2H.nom - tools[4].antall}
              stk
            </p>
          )}
          {tools && tools[5].antall < tooldata.f2V.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[5].art}, {tools[5].type},{" "}
              {tooldata.f2V.nom - tools[5].antall}
              stk
            </p>
          )}
          {tools && tools[6].antall < tooldata.f3H.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[6].art}, {tools[6].type},{" "}
              {tooldata.f3H.nom - tools[6].antall}
              stk
            </p>
          )}
          {tools && tools[7].antall < tooldata.f3V.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[7].art}, {tools[7].type},{" "}
              {tooldata.f3V.nom - tools[7].antall}
              stk
            </p>
          )}
          {tools && tools[8].antall < tooldata.redKniv.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[8].art}, {tools[8].type},{" "}
              {tooldata.redKniv.nom - tools[8].antall}
              stk
            </p>
          )}
          {tools && tools[9].antall < tooldata.f1a4Kniv.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[9].art}, {tools[9].type},{" "}
              {tooldata.f1a4Kniv.nom - tools[9].antall}
              stk
            </p>
          )}
          {tools && tools[10].antall < tooldata.f2a3Kniv.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[10].art}, {tools[10].type},{" "}
              {tooldata.f2a3Kniv.nom - tools[10].antall}
              stk
            </p>
          )}
          {tools && tools[11].antall < tooldata.f3Kniv.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[11].art}, {tools[11].type},{" "}
              {tooldata.f3Kniv.nom - tools[11].antall}
              stk
            </p>
          )}
          {tools && tools[12].antall < tooldata.hugger.nom && (
            <p className="bestill-tools">
              Art.nr: {tools[12].art}, {tools[12].type},{" "}
              {tooldata.hugger.nom - tools[12].antall}
              stk
            </p>
          )}
        </div>

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
            color: white;
            background: var(--primary);
            padding: 3rem;
            border-radius: 15px;
          }
          .bestill-header {
            font-style: italic;
            font-size: 0.8rem;
            margin-bottom: 1rem;
            color: var(--text2);
          }
          .bestill-tools {
            font-size: 0.8rem;
            color: var(--text3);
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
            font-size: 3rem;
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
