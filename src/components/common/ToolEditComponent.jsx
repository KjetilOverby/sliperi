import React from "react";

const ToolEditComponent = ({ setOpenEdit, img }) => {
  return (
    <>
      <div className="container">
        <div className="edit-box">
          <img className="img" src={img} alt="" />
          <button onClick={() => setOpenEdit(false)}>Close</button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
            width: 100vw;
            height: 100vh;
            z-index: 5000;
            display: grid;
            place-items: center;
          }
          .edit-box {
            width: 40rem;
            height: 30rem;
            background: #fff;
          }
          .img {
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default ToolEditComponent;
