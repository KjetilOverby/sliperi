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
  const [getIMG, setGetIMG] = useState();
  const [getType, setGetType] = useState();
  const [getAntall, setGetAntall] = useState();

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

  console.log(getType);

  return (
    <>
      {openEdit && (
        <ToolEditComponent
          setOpenEdit={setOpenEdit}
          img={getIMG}
          setGetAntall={setGetAntall}
          editAntall={editAntall}
          type={getType}
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
