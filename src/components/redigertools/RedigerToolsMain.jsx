import React, { useEffect, useState, useContext } from "react";
import dateFormat, { masks } from "dateformat";
import ButtonComponent from "../common/ButtonComponent";

import ModalComponent from "../common/ModalComponent";
import { useAuth0 } from "@auth0/auth0-react";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const RedigerToolsMain = ({
  toolswaste,
  tools,
  toolUpdateDatabase,
  setToolUpdateDatabase,
}) => {
  const { user, isAuthenticated } = useAuth0();

  const [deleteCalcs, setDeleteCalcs] = useState();
  const [toolType, setToolType] = useState();
  const [getAntall, setGetAntall] = useState();
  const [getAntallFromDeleted, setGetAntallFromDeleted] = useState();
  const [toolID, setToolID] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const editAntallPromise = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .patch(
            `/api/tool/editTool?ids=${getAntall[0]._id}&user=${user.sub}`,
            {
              antall: deleteCalcs,
            }
          )
          .then(function (res) {
            resolve(res);
          });
      } catch (error) {
        reject(console.log(error));
      }
    });
  };

  useEffect(() => {
    if (tools) {
      setGetAntall(tools.filter((item) => item.type === toolType));
    }
  }, [toolType]);

  useEffect(() => {
    if (getAntall) {
      setDeleteCalcs(
        Number(getAntall[0] && getAntall[0].antall) +
          Math.abs(Number(getAntallFromDeleted))
      );
    }
  });

  const deletePromise = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .delete(`/api/tool/deleteToolCard/?del=${toolID}&user=${user.sub}`)
          .then((res) => {
            resolve(res);
          });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteHandler = async () => {
    await deletePromise().then(function () {
      editAntallPromise();
      setOpenDeleteModal(false);
      setToolUpdateDatabase(!toolUpdateDatabase);
    });
  };

  return (
    <>
      <div className="content-container">
        <h1 className="header mb">Rediger slettede data</h1>
        {openDeleteModal && (
          <ModalComponent
            text="Slett input"
            titleRightBtn="Avbryt"
            cancel={() => setOpenDeleteModal(false)}
            action={deleteHandler}
            titleLeftBtn="Slett"
          />
        )}
        {toolswaste &&
          toolswaste.map((item) => {
            const openDeleteInput = () => {
              setToolType(item.type);
              setGetAntallFromDeleted(item.input);
              setToolID(item._id);
              setOpenDeleteModal(true);
            };

            return (
              <div key={item._id} className="card-container mb">
                <div className="img-container">
                  <img className="img" src={item.img} alt="" />
                </div>
                <div>
                  <h4>{item.type}</h4>
                  <p>Antall før:{item.antall}</p>
                  <p>slettet: {item.input}</p>
                  <p>{dateFormat(item.date, "dd.mm.yyyy")}</p>
                </div>
                <div>
                  <ButtonComponent
                    func={openDeleteInput}
                    title="Slett"
                    type="red-outline"
                  />
                </div>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
            background: var(--text);
            place-items: center;
            padding: 0.5rem;
            border-radius: 10px;
          }
          .img {
            width: 100%;
            border-radius: 10px;
          }
          .img-container {
            width: 8rem;
          }
        `}
      </style>
    </>
  );
};

export default RedigerToolsMain;
