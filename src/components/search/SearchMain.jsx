import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/MyContext";
import ModalComponent from "../common/ModalComponent";
import LinckSearchCards from "./LinckSearchCards";
import { GiRapidshareArrow } from "react-icons/gi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const SearchMain = () => {
  const { linckBlades, setLinckID } = useContext(MyContext);
  const [input, setInput] = useState();

  const [filteredBlades, setFilteredBlades] = useState();
  const [searchInput, setSearchInput] = useState();
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

  const inputSearcHandler = (e) => {
    setInput(e.target.value);
  };

  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    setSearchResult(
      linckBlades &&
        linckBlades.filter((blades) => blades.serial.includes(input))
    );
  }, [input]);

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
        />
      )}

      <div className="content-container">
        <div>
          <h1 className="header mb">Søk i lincksagblad</h1>
        </div>
        <div className="input-container">
          <input
            onChange={inputSearcHandler}
            className="input"
            placeholder="Søk"
          />
          <p>Antall blad: {linckBlades && linckBlades.length}</p>
          <p>Antall treff: {searchResult && searchResult.length}</p>
        </div>
        <div>
          {searchResult &&
            searchResult.map((blade) => {
              return (
                <div>
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
                    wasteUpdate={wasteUpdate}
                    comment={blade.comment}
                    commentDate={blade.commentDate}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>{`
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
