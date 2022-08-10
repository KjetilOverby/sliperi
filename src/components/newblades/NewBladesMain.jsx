import React, { useState, useEffect } from "react";
import AddBladesInputComponent from "../addblades/AddbladesSelectorInput";
import { v4 as uuidv4 } from "uuid";
import dateFormat, { masks } from "dateformat";
const axios = require("axios");
import { useAuth0 } from "@auth0/auth0-react";
import ModalComponentEdit from "../common/ModalComponentEdit";
import { FaTrashAlt } from "react-icons/fa";

const api = axios.create({
  baseURL: process.env.api,
});

const NewBladesMain = () => {
  const [selectorValue, setSelectorValue] = useState();
  const [serialInput, setSerialInput] = useState();
  const [uuid, setUuid] = useState();

  const [newBlades, setNewBlades] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [bladeInfo, setBladeInfo] = useState();

  const [updateNewblades, setUpdateNewblades] = useState(false);

  const { user, isAuthenticated } = useAuth0();
  const monthRequest = "08";
  const monthRequest2 = "09";
  const yearRequest = "2022";

  useEffect(() => {
    setUuid(uuidv4());
  }, [updateNewblades]);

  useEffect(() => {
    api
      .get(
        `/api/linck/newblades/createdBlades?month=${monthRequest}&month2=${monthRequest2}&yearRequest=${yearRequest}`
      )
      .then(function (response) {
        setNewBlades(response.data.data);
        updateNewblades(!updateNewblades);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [updateNewblades]);

  console.log(newBlades);

  const deleteCreatedBladeHandler = () => {
    deleteCreatedBladeHandler2();
    try {
      api
        .delete(
          `/api/linck/deletecreatedblades/?del=${bladeInfo.id}&user=${user.sub}`
        )
        .then((res) => {
          if (res.status === 200) {
            setOpenDeleteModal(false);
            setUpdateNewblades(!updateNewblades);
          }
        });
    } catch (error) {
      console.log(error);
      setError("Du er ikke innlogget og kan ikke slette bladet. " + error);
    }
  };
  const deleteCreatedBladeHandler2 = () => {
    try {
      api
        .delete(
          `/api/linck/deletecreatedblades2/?del=${bladeInfo.id}&user=${user.sub}`
        )
        .then((res) => {
          if (res.status === 200) {
            setOpenDeleteModal(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const createNewBladeHandler = (e) => {
    if (
      serialInput === "" ||
      serialInput === undefined ||
      selectorValue === "" ||
      selectorValue === undefined
    ) {
      alert("Du må fylle ut bladtype og serienummer!");
    } else {
      api
        .post(`/api/linck/newblades/createNewBlade/?user=${user.sub}`, {
          type: selectorValue,
          serial: serialInput,
          updated: new Date(),
          newid: uuid,
        })
        .then(function (response) {
          if (response.status === 200) {
            createNewBladeListHandler();
            setTimeout(() => {
              setUpdateNewblades(!updateNewblades);
            }, 1000);
          }
        });
    }
  };
  const createNewBladeListHandler = () => {
    api
      .post(`/api/linck/newblades/createNewBladeList/?user=${user.sub}`, {
        type: selectorValue,
        serial: serialInput,
        updated: new Date(),
        newid: uuid,
      })
      .then(function (response) {
        if (response.status === 200) {
          setUpdateNewblades(!updateNewblades);
        }
      });
  };

  const onSubmit = (e) => {
    if (e.code === "Enter") {
      createNewBladeHandler();
    }
  };

  return (
    <>
      {openDeleteModal && (
        <ModalComponentEdit
          cancel={setOpenDeleteModal}
          title="Slette "
          getSerial={bladeInfo.serial}
          actionBtnTxt="SLETT"
          icon={<FaTrashAlt style={{ color: "red", fontSize: "1.5rem" }} />}
          btnBorder="red"
          actionHover="#dadada"
          actionBtn={deleteCreatedBladeHandler}
        />
      )}
      <div className="content-container">
        <h1 className="header mb">Legg til nye blad</h1>
        <div className="addblades-container">
          {user && user.sub === process.env.USER_SUB ? (
            <AddBladesInputComponent
              setSelectorValue={setSelectorValue}
              setSerialInput={setSerialInput}
              createNewBladeHandler={createNewBladeHandler}
              onSubmit={onSubmit}
            />
          ) : (
            <h3>Logg inn for å legge til nye blad</h3>
          )}
        </div>
        <div className="newblades-main-container">
          {newBlades &&
            newBlades.map((item) => {
              const openDeleteNewbladesHandler = () => {
                setOpenDeleteModal(true);
                setBladeInfo({
                  serial: item.serial,
                  type: item.type,
                  id: item.newid,
                });
              };
              return (
                <div
                  key={item.newid}
                  onClick={openDeleteNewbladesHandler}
                  className="newblade-container"
                >
                  <p key={item.serial} className="serial">
                    {item.serial}
                  </p>
                  <p key={item.serial}>{item.type}</p>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .addblades-container {
            width: 20rem;
          }
          .container {
          }
          .newblade-container {
            display: flex;
            padding: 0.2rem;
            font-size: 0.8rem;
            background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
            margin-bottom: 0.2rem;
            width: 20rem;
            border-radius: 5px;
          }
          .newblade-container:hover {
            cursor: pointer;
          }
          .newblades-main-container {
            margin-top: 2rem;
          }
          .serial {
            width: 5rem;
          }
        `}
      </style>
    </>
  );
};

export default NewBladesMain;
