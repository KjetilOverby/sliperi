import React, { useContext, useState } from "react";
import { MyContext } from "../../contexts/MyContext";
import Toolcard from "../common/Toolcard";
import ToolEditComponent from "../common/ToolEditComponent";

const RedigerSegmenterMain = () => {
  const { tools } = useContext(MyContext);

  const [toolID, setToolID] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [getIMG, setGetIMG] = useState();

  return (
    <>
      {openEdit && <ToolEditComponent setOpenEdit={setOpenEdit} img={getIMG} />}
      <div className="content-container">
        <h1>Rediger segmenter</h1>
        <Toolcard
          img={tools && tools[0].img}
          title={tools && tools[0].type}
          ant={tools && tools[0].antall}
          ID={tools && tools[0]._id}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
        />
        <Toolcard
          img={tools && tools[1].img}
          title={tools && tools[1].type}
          ant={tools && tools[1].antall}
          ID={tools && tools[1]._id}
          setToolID={setToolID}
          setOpenEdit={setOpenEdit}
          setGetIMG={setGetIMG}
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
