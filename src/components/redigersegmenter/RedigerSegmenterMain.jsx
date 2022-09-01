import React, { useContext, useState } from "react";
import { MyContext } from "../../contexts/MyContext";
import Toolcard from "../common/Toolcard";
import ToolEditComponent from "../common/ToolEditComponent";
const axios = require("axios");
import { useAuth0 } from "@auth0/auth0-react";

const api = axios.create({
  baseURL: process.env.api,
});

const RedigerSegmenterMain = () => {
  const { user, isAuthenticated } = useAuth0();
  const { tools, setToolUpdateDatabase, toolUpdateDatabase } =
    useContext(MyContext);

  const [toolID, setToolID] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [getIMG, setGetIMG] = useState();
  const [getType, setGetType] = useState();
  const [getAntall, setGetAntall] = useState();
  const [previousCount, setPreviousCount] = useState();

  // EDIT ANTALL
  const editAntallPromise = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .patch(`/api/tool/editTool?ids=${toolID}&user=${user.sub}`, {
            antall: getAntall,
          })
          .then(function (res) {
            resolve(res);
          });
      } catch (error) {
        reject(console.log(error));
      }
    });
  };
  const editAntall = async () => {
    await editAntallPromise().then(function () {
      setOpenEdit(false);
      setToolUpdateDatabase(!toolUpdateDatabase);
    });
  };

  // DELETE TOOLS

  const createDeleteDataPromise = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .post(`/api/tool/wastecreate?user=${user.sub}`, {
            type: getType,
            antall: previousCount,
            input: getAntall,
            img: getIMG,
            date: new Date(),
          })
          .then(function (res) {
            resolve(res);
          });
      } catch (error) {}
    });
  };

  const deleteToolsHandler = async () => {
    await createDeleteDataPromise();
  };

  return (
    <>
      {openEdit && (
        <ToolEditComponent
          setOpenEdit={setOpenEdit}
          img={getIMG}
          setGetAntall={setGetAntall}
          editAntall={editAntall}
          type={getType}
          deleteToolsHandler={deleteToolsHandler}
        />
      )}
      <div className="content-container">
        <h1 className="header">Rediger segmenter</h1>
        <Toolcard
          img={tools && tools[0].img}
          title={tools && tools[0].type}
          ant={tools && tools[0].antall}
          ID={tools && tools[0]._id}
          type={tools && tools[0].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[1].img}
          title={tools && tools[1].type}
          ant={tools && tools[1].antall}
          ID={tools && tools[1]._id}
          type={tools && tools[1].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default RedigerSegmenterMain;
