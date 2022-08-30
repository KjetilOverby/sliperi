import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiAddToQueue } from "react-icons/bi";

const ToolEditComponent = ({ setOpenEdit, img }) => {
  const [openDeleteInput, setOpenDeleteInput] = useState(false);
  const [openAddInput, setOpenAddInput] = useState(false);
  return (
    <>
      <div className="container">
        <div className="edit-box">
          <img className="img" src={img} alt="" />
          <div className="button-container">
            <div className="button button-delete">
              <RiDeleteBin5Fill
                style={{ fontSize: "1.8rem", color: "darkred" }}
              />
            </div>
            <div className="button button-add">
              <BiAddToQueue
                style={{ fontSize: "1.8rem", color: "darkgreen" }}
              />
            </div>
          </div>
          <button onClick={() => setOpenEdit(false)}>Close</button>
          <div>
            <input className="input" type="number" />
          </div>
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
            padding: 2rem;
            height: auto;
            animation: bounceInUp 1s;
          }
          .img {
            width: 100%;
          }
          .button {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
          }
          .button-container {
            width: 9rem;
            display: flex;
            justify-content: space-between;
            margin: 1rem 0;
          }
          .button-delete {
            background: indianred;
          }
          .button-add {
            background: seagreen;
          }
          @keyframes bounceInUp {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, 3000px, 0);
              transform: translate3d(0, 3000px, 0);
            }
            60% {
              opacity: 1;
              -webkit-transform: translate3d(0, -20px, 0);
              transform: translate3d(0, -20px, 0);
            }
            75% {
              -webkit-transform: translate3d(0, 10px, 0);
              transform: translate3d(0, 10px, 0);
            }
            90% {
              -webkit-transform: translate3d(0, -5px, 0);
              transform: translate3d(0, -5px, 0);
            }
            100% {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }
        `}
      </style>
    </>
  );
};

export default ToolEditComponent;
