import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiAddToQueue } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { useAuth0 } from "@auth0/auth0-react";

const ToolEditComponent = ({
  setOpenEdit,
  img,
  setGetAntall,
  editAntall,
  type,
  deleteToolsHandler,
  addToolsHandler,
}) => {
  const { user, isAuthenticated } = useAuth0();
  const [openDeleteInput, setOpenDeleteInput] = useState(false);
  const [openAddInput, setOpenAddInput] = useState(false);
  const [openEditInput, setOpenEditInput] = useState(false);

  const openDeleteInputHandler = () => {
    setOpenDeleteInput(true);
    setOpenAddInput(false);
    setOpenEditInput(false);
  };

  const openAddInputHandler = () => {
    setOpenDeleteInput(false);
    setOpenAddInput(true);
    setOpenEditInput(false);
  };
  const openEditInputHandler = () => {
    setOpenEditInput(true);
    setOpenAddInput(false);
    setOpenDeleteInput(false);
  };

  return (
    <>
      <div className="container">
        <div className="edit-box">
          <img className="img" src={img} alt="" />
          <h2 className="header">{type}</h2>
          {user && user.sub === process.env.USER_SUB && (
            <div className="button-container">
              <div
                onClick={openDeleteInputHandler}
                className="button button-delete"
              >
                <RiDeleteBin5Fill
                  style={{ fontSize: "1.8rem", color: "darkred" }}
                />
              </div>
              <div onClick={openAddInputHandler} className="button button-add">
                <BiAddToQueue
                  style={{ fontSize: "1.8rem", color: "darkgreen" }}
                />
              </div>
              <div
                onClick={openEditInputHandler}
                className="button button-edit"
              >
                <BiEdit style={{ fontSize: "1.8rem", color: "darkblue" }} />
              </div>
            </div>
          )}
          {openDeleteInput && (
            <div className="input-container delete">
              <h4 className="header mb">Slett</h4>
              <InputComponent setGetAntall={setGetAntall} />
              <ButtonComponent
                func={deleteToolsHandler}
                type="outline"
                title="Slett"
              />
            </div>
          )}
          {openAddInput && (
            <div className="input-container add">
              <h4 className="header mb">Legg til</h4>
              <InputComponent setGetAntall={setGetAntall} />
              <ButtonComponent
                func={addToolsHandler}
                type="outline"
                title="Legg til"
              />
            </div>
          )}
          {openEditInput && (
            <div className="input-container edit">
              <h4 className="header mb">Rediger antall</h4>
              <InputComponent setGetAntall={setGetAntall} />
              <ButtonComponent
                func={editAntall}
                type="outline"
                title="Lagre endringer"
              />
            </div>
          )}
          <ButtonComponent
            title="Lukk"
            type="outline"
            func={() => setOpenEdit(false)}
          />
        </div>
      </div>
      <style jsx>
        {`
          .add {
            background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
          }
          .container {
            position: absolute;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
            width: 100vw;
            height: 100vh;
            z-index: 5000;
            display: grid;
            place-items: center;
          }
          .delete {
            background-image: linear-gradient(
              to right,
              #feada6 0%,
              #f5efef 100%
            );
          }
          .edit {
            background-image: linear-gradient(
              to right,
              #accbee 0%,
              #e7f0fd 100%
            );
          }
          .edit-box {
            width: 40rem;
            height: 30rem;
            background: #fff;
            padding: 2rem;
            height: auto;
            animation: bounceInUp 1s;
            border-radius: 5px;
          }
          .img {
            width: 100%;
            border-radius: 5px;
          }

          .input-container {
            padding: 1rem;
            margin: 0.5rem 0;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
          }
          .button {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
          }
          .button:hover {
            cursor: pointer;
          }
          .button-container {
            width: 14rem;
            display: flex;
            justify-content: space-between;
            margin: 1rem 0;
          }

          .button-delete {
            background: indianred;
          }
          .button-edit {
            background: dodgerblue;
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
          @media only screen and (max-width: 1000px) {
            .edit-box {
              width: 100vw;
              height: 30rem;
              background: #fff;
              padding: 2rem;
              height: auto;
              animation: bounceInUp 1s;
            }
          }
        `}
      </style>
    </>
  );
};

export default ToolEditComponent;
