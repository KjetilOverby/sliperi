import React, { useState, useContext, useEffect } from "react";

import { MyContext } from "../../contexts/MyContext";
import ModalComponent from "../common/ModalComponent";
import LinckSearchCards from "./LinckSearchCards";
import { GiRapidshareArrow } from "react-icons/gi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import BladesListDelRetip from "./BladesListDelRetip";
import dateFormat from "dateformat";
const axios = require("axios");
import { useAuth0 } from "@auth0/auth0-react";

const SearchMain = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    linckBlades,
    setLinckID,
    linckID,
    setLinckUpdateDatabase,
    linckUpdateDatabase,
  } = useContext(MyContext);
  const [input, setInput] = useState("");

  const [filteredBlades, setFilteredBlades] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRetipModal, setOpenRetipModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [getSerial, setGetSerial] = useState();

  const [deletedBlades, setDeletedBlades] = useState();
  const [wasteMonth, setWasteMonth] = useState(new Date().getMonth() + 1);
  const [wasteMonth2, setWasteMonth2] = useState(new Date().getMonth() + 2);
  const [namedMonth, setNamedMonth] = useState();
  const [wasteUpdate, setWasteUpdate] = useState(false);
  const currentYear = new Date().getFullYear();
  const [getType, setGetType] = useState();
  const [getNumberOfRetip, setGetNumberOfRetip] = useState();

  const api = axios.create({
    baseURL: process.env.api,
  });

  const inputSearcHandler = (e) => {
    setInput(e.target.value);
  };

  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    setSearchResult(
      linckBlades &&
        linckBlades.filter((blades) => blades.serial.includes(input))
    );
  }, [input, linckUpdateDatabase, searchResult]);

  const createDeletedBladeHandler = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .post(`/api/linck/createDeletedBlade/?user=${user.sub}`, {
            type: getType,
            serial: getSerial,
            wasteNumberOfRetip: getNumberOfRetip,
            wasteDate: new Date(),
          })
          .then(function (response) {
            resolve(response);
          });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteLinckBlade = () => {
    try {
      api
        .delete(`/api/linck/deleteBlade/?del=${linckID}&user=${user.sub}`)
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBladeHandler = () => {
    setOpenDeleteModal(false);
    deleteLinckBlade();
    createDeletedBladeHandler().then(() => {
      setLinckUpdateDatabase(!linckUpdateDatabase);
      setInput("");
    });
  };

  const retipUpdatePromise = () => {
    return new Promise((resolve, reject) => {
      api
        .post(
          `/api/linck/service/updateretip/?ids=${linckID}&user=${user.sub}`,
          {
            type: getType,
            performer: "Stridsbergs",
            date: dateFormat(new Date(), "dd.mm.yyyy HH:MM"),
          }
        )
        .then(function (res) {
          resolve(console.log(res));
        });
    });
  };

  const createServiceBladeHandler = () => {
    try {
      api
        .post(`/api/linck/service/createserviceBlade/?user=${user.sub}`, {
          type: getType,
          serial: getSerial,
          serviceDate: new Date(),
        })
        .then(function (response) {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const retipUpdateHandler = () => {
    createServiceBladeHandler();
    setOpenRetipModal(false);
    retipUpdatePromise().then(() => {
      setLinckUpdateDatabase(!linckUpdateDatabase);
      setInput(getSerial);
    });
  };

  return (
    <>
      {openRetipModal && (
        <ModalComponent
          icon={
            <GiRapidshareArrow
              style={{ color: "dodgerblue", fontSize: "3rem" }}
            />
          }
          title="Omlodding"
          text="Omlodde med dagens dato fra stridsbergs?"
          titleLeftBtn="OK"
          titleRightBtn="AVBRYT"
          cancel={() => setOpenRetipModal(false)}
          action={retipUpdateHandler}
        />
      )}
      {openDeleteModal && (
        <ModalComponent
          icon={
            <RiDeleteBin6Fill
              style={{ color: "indianred", fontSize: "3rem" }}
            />
          }
          title="Slett"
          text="Slette dette bladet?"
          titleLeftBtn="OK"
          titleRightBtn="AVBRYT"
          cancel={() => setOpenDeleteModal(false)}
          action={deleteBladeHandler}
        />
      )}

      <div className="content-container main-container">
        <div>
          <h1 className="header mb">Søk i lincksagblad</h1>
        </div>
        <div className="container">
          <BladesListDelRetip />
          <div>
            <div className="input-container">
              <input
                onChange={inputSearcHandler}
                className="input"
                placeholder="Søk"
                value={input}
              />
              <p>Antall blad: {linckBlades && linckBlades.length}</p>
              <p>Antall treff: {searchResult && searchResult.length}</p>
            </div>
            {searchResult &&
              input.length > 1 &&
              searchResult.map((blade) => {
                return (
                  <div key={blade._id}>
                    <LinckSearchCards
                      keyID={blade._id}
                      serial={blade.serial}
                      type={blade.type}
                      regDate={blade.registDate}
                      updated={blade.updated}
                      performer={blade.performer}
                      date={blade.date}
                      setOpenDeleteModal={setOpenDeleteModal}
                      setOpenRetipModal={setOpenRetipModal}
                      setOpenCommentModal={setOpenCommentModal}
                      setGetSerial={setGetSerial}
                      setLinckID={setLinckID}
                      setGetType={setGetType}
                      setGetNumberOfRetip={setGetNumberOfRetip}
                      comment={blade.comment}
                      commentDate={blade.commentDate}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 30rem 1fr;
        }

        .input {
          padding: 0.5rem;
          border-radius: 5px;
          border: none;
          outline: none;
          background: #dedede;
          font-size: 1.5rem;
        }
        .input-container {
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
};

export default SearchMain;
