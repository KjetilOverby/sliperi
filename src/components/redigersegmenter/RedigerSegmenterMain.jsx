import React, { useContext, useState, useEffect } from "react";
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
  const [antallCalcs, setAntallCalcs] = useState();

  // ************************   EDIT ANTALL ***************************************************
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

  //************************** */ DELETE TOOLS **********************************************

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
  useEffect(() => {
    setAntallCalcs(previousCount - getAntall);
  });

  const newAntallPromise = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .patch(`/api/tool/editTool?ids=${toolID}&user=${user.sub}`, {
            antall: antallCalcs,
          })
          .then(function (res) {
            resolve(res);
          });
      } catch (error) {
        reject(console.log(error));
      }
    });
  };

  const deleteToolsHandler = async () => {
    await createDeleteDataPromise().then(async function () {
      await newAntallPromise().then(function () {
        setToolUpdateDatabase(!toolUpdateDatabase);
        setOpenEdit(false);
      });
    });
  };

  // *********************************  ADD TOOLS *************************************

  const [antallCalcsPlus, setAntallCalcsPlus] = useState();

  useEffect(() => {
    setAntallCalcsPlus(Number(previousCount) + Number(getAntall));
  });

  const createAddPromise = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .post(`/api/tool/newToolCreate?user=${user.sub}`, {
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

  const newAntallPromisePlus = () => {
    return new Promise((resolve, reject) => {
      try {
        api
          .patch(`/api/tool/editTool?ids=${toolID}&user=${user.sub}`, {
            antall: antallCalcsPlus,
          })
          .then(function (res) {
            resolve(res);
          });
      } catch (error) {
        reject(console.log(error));
      }
    });
  };

  const addToolsHandler = async () => {
    await createAddPromise().then(async function () {
      await newAntallPromisePlus().then(function () {
        setToolUpdateDatabase(!toolUpdateDatabase);
        setOpenEdit(false);
      });
    });
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
          addToolsHandler={addToolsHandler}
        />
      )}
      <div className="content-container main-container">
        <h1 className="header mb">Rediger segmenter og kniver</h1>
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
        <Toolcard
          img={tools && tools[2].img}
          title={tools && tools[2].type}
          ant={tools && tools[2].antall}
          ID={tools && tools[2]._id}
          type={tools && tools[2].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[3].img}
          title={tools && tools[3].type}
          ant={tools && tools[3].antall}
          ID={tools && tools[3]._id}
          type={tools && tools[3].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[4].img}
          title={tools && tools[4].type}
          ant={tools && tools[4].antall}
          ID={tools && tools[4]._id}
          type={tools && tools[4].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[5].img}
          title={tools && tools[5].type}
          ant={tools && tools[5].antall}
          ID={tools && tools[5]._id}
          type={tools && tools[5].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[6].img}
          title={tools && tools[6].type}
          ant={tools && tools[6].antall}
          ID={tools && tools[6]._id}
          type={tools && tools[6].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[7].img}
          title={tools && tools[7].type}
          ant={tools && tools[7].antall}
          ID={tools && tools[7]._id}
          type={tools && tools[7].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[8].img}
          title={tools && tools[8].type}
          ant={tools && tools[8].antall}
          ID={tools && tools[8]._id}
          type={tools && tools[8].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[9].img}
          title={tools && tools[9].type}
          ant={tools && tools[9].antall}
          ID={tools && tools[9]._id}
          type={tools && tools[9].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[10].img}
          title={tools && tools[10].type}
          ant={tools && tools[10].antall}
          ID={tools && tools[10]._id}
          type={tools && tools[10].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[11].img}
          title={tools && tools[11].type}
          ant={tools && tools[11].antall}
          ID={tools && tools[11]._id}
          type={tools && tools[11].type}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
          getAntall={getAntall}
          setGetType={setGetType}
          setPreviousCount={setPreviousCount}
        />
        <Toolcard
          img={tools && tools[12].img}
          title={tools && tools[12].type}
          ant={tools && tools[12].antall}
          ID={tools && tools[12]._id}
          type={tools && tools[12].type}
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
          .main-container {
            background: var(--text);
          }
        `}
      </style>
    </>
  );
};

export default RedigerSegmenterMain;
