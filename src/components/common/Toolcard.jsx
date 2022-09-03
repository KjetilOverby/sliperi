import React from "react";
import Colors from "../../Colors";

const Toolcard = ({
  title,
  img,
  ant,
  ID,
  setToolID,
  setOpenEdit,
  setGetIMG,
  setGetType,
  type,
  setPreviousCount,
}) => {
  const openEditModal = () => {
    setOpenEdit(true);
    setToolID(ID);
    setGetIMG(img);
    setGetType(type);
    setPreviousCount(ant);
  };

  return (
    <>
      <div onClick={openEditModal} className="container">
        <img className="img" src={img} alt="" />
        <div>
          <h4 className="title">{title}</h4>
          <p className="ant">Antall: {ant}</p>
        </div>
      </div>
      <style jsx>
        {`
          .ant {
            font-weight: 600;
            margin-top: 0.5rem;
            color: var(--text2);
          }
          .title {
            color: var(--text);
          }
          .container {
            display: grid;
            grid-template-columns: 8rem 1fr;
            width: 100%;
            margin: 0.5rem 0;
            background: var(--secondary);
            padding: 0.5rem;
            transition: 0.5s;
          }
          .container:hover {
            background: var(--primary);
            cursor: pointer;
          }
          .img {
            width: 5rem;
          }
        `}
      </style>
    </>
  );
};

export default Toolcard;
