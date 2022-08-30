import React from "react";

const Toolcard = ({
  title,
  img,
  ant,
  ID,
  setToolID,
  setOpenEdit,
  setGetIMG,
}) => {
  const openEditModal = () => {
    setOpenEdit(true);
    setToolID(ID);
    setGetIMG(img);
  };

  return (
    <>
      <div onClick={openEditModal} className="container">
        <img className="img" src={img} alt="" />
        <div>
          <h4>{title}</h4>
          <p>Antall: {ant}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 8rem 1fr;
            width: 30rem;
            margin: 2rem 0;
            background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
            padding: 1rem;
            transition: 0.5s;
          }
          .container:hover {
            background-image: linear-gradient(
              to right,
              #74ebd5 0%,
              #9face6 100%
            );
            cursor: pointer;
          }
          .img {
            width: 7rem;
          }
        `}
      </style>
    </>
  );
};

export default Toolcard;
