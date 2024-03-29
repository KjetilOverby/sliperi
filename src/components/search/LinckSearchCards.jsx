import React, { useState, useEffect, useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowRepeat } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { MyContext } from "../../contexts/MyContext";
import dateFormat, { masks } from "dateformat";
import { useAuth0 } from "@auth0/auth0-react";

const LinckCards = ({
  keyID,
  serial,
  type,
  regDate,
  updated,
  performer,
  date,
  setOpenDeleteModal,
  setOpenRetipModal,
  setOpenCommentModal,
  setGetSerial,
  setLinckID,
  setGetType,
  setGetNumberOfRetip,
  comment,
  commentDate,
}) => {
  const { user, isAuthenticated } = useAuth0();

  const [color, setColor] = useState("green");
  const [innerColor, setInnerColor] = useState("blue");
  const { userID, linckUpdateDatabase } = useContext(MyContext);

  useEffect(() => {
    if (performer.length <= 1) {
      setColor("#52b149");
      setInnerColor("#52b14960");
    } else if (performer.length === 2) {
      setColor("#ccce56");
      setInnerColor("#aca14385");
    } else {
      setColor("#d14242");
      setInnerColor("#b149495f");
    }
  }, [performer, linckUpdateDatabase]);

  const openDeleteModalHandler = () => {
    setOpenDeleteModal(true);
    setLinckID(keyID);
    setGetSerial(serial);
    setGetType(type);
    setGetNumberOfRetip(performer.length);
  };
  const openRetipModalHandler = () => {
    setOpenRetipModal(true);
    setGetSerial(serial);
    setLinckID(keyID);
    setGetType(type);
  };
  const openCommentModalHandler = () => {
    setOpenCommentModal(true);
    setGetSerial(serial);
    setLinckID(keyID);
  };

  return (
    <>
      <div key={keyID} className="container">
        <div className="top-container">
          <div className="outer-ring">
            <div className="indicator">{performer.length}</div>
          </div>
          <h4 className="serial">{serial}</h4>
          <p className="type">{type}</p>
        </div>
        <div className="regist-container">
          <p className="regist">
            Registreringsdato:{" "}
            {regDate || dateFormat(updated, "dd.mm.yyyy HH:MM")}
          </p>
        </div>
        <div className="retip-container">
          <div className="performer-container">
            {performer.map((item) => (
              <div key={Math.random()}>
                <p className="retip-text">{item}</p>
              </div>
            ))}
          </div>
          <div className="date-container">
            {date.map((item) => (
              <div key={Math.random()}>
                <p key={Math.random()} className="retip-text">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="comment-input-container">
          {/* <div>
            {commentDate &&
              commentDate.map((item) => {
                return (
                  <>
                    <p
                      style={{ marginRight: "1rem", width: "8rem" }}
                      className="comment-text container-text"
                    >
                      {item}
                    </p>
                  </>
                );
              })}
          </div> */}
          <div>
            {comment &&
              comment.map((item) => {
                return (
                  <>
                    <p className="comment-text container-text">{item}</p>
                  </>
                );
              })}
          </div>
        </div>
        {user && user.sub === process.env.USER_SUB && (
          <div className="icon-btn-container">
            <div className="icon-container comment-container">
              <FaComments
                style={{ fontSize: "1.2rem" }}
                onClick={openCommentModalHandler}
              />
            </div>
            <div
              onClick={openRetipModalHandler}
              className="icon-container retip-btn-container">
              <BsArrowRepeat style={{ fontSize: "1.2rem" }} />
            </div>
            <div
              onClick={openDeleteModalHandler}
              className="icon-container delete-container">
              <RiDeleteBin6Line style={{ fontSize: "1.2rem" }} />
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem;
            margin: 0.5rem;
            display: grid;
            border-radius: 5px;
            grid-template-columns: 23rem 15rem 1fr;
            grid-template-rows: 2rem 2rem auto 1fr;
            grid-template-areas:
              "top button button"
              "middle middle ."
              "bottom bottom ."
              "comment comment .";
            background: var(--primary);
          }
          .container:hover {
            cursor: pointer
          }
          .container-text {
            height: auto;
            flex: 1;
          }
          .comment-input-container {
            grid-area: comment;
            display: flex;
          }
          .comment-text {
            color: var(--text2);
            font-style: italic;
            font-size: 0.9rem;
          }
          .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 50%;
            font-size: 1rem;
          }
          .icon-container:hover {
            cursor: pointer;
          }
          .icon-btn-container {
            width: 10rem;
            display: flex;
            justify-content: space-between;
            grid-area: button;
          }
          .indicator {
            height: 1.5rem;
            width: 1.5rem;
            background: ${color};
            border-radius: 50%;
            margin-right: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }
          .outer-ring {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            border: 1px solid ${color};
            background: ${innerColor};
            display: grid;
            place-items: center;
            justify-content: center;
            margin-right: 0.5rem;
          }
          .date-container {
            width: 9rem;
          }
          .delete-container {
            border: 1px solid #b85656;
            transition: 0.5s;
            background: rgba(255, 0, 0, 0.192);
            color: #b85656;
          }
          .delete-container:hover {
            background: #9b3e3e;
            color: white;
          }

          .comment-container {
            border: 1px solid rgb(84, 192, 62);
            transition: 0.5s;
            background: rgba(0, 255, 13, 0.192);
            color: rgb(80, 189, 58);
          }
          .comment-container:hover {
            background: #5db65d;
            color: white;
          }
          .regist-container {
            grid-area: middle;
          }
          .retip-btn-container {
            border: 1px solid rgb(44, 133, 235);
            transition: 0.5s;
            background: rgba(0, 102, 255, 0.192);
            color: rgb(44, 133, 235);
          }
          .retip-btn-container:hover {
            background: #547ab8;
            color: white;
          }
          .performer-container {
            display: flex;
            flex-direction: column;
            width: 6rem;
          }
          .retip-container {
            display: flex;
            grid-area: bottom;
            margin: 1rem 0;
          }
          .retip-text {
            color: var(--text2);
            font-style: italic;
            font-size: 0.9rem;
          }
          .serial {
            margin: 0 0.5rem 0 0;
            color: var(--middle);
          }
          .type {
            margin: 0;
            color: var(--text2);
            font-style: italic;
          }
          .regist {
            color: var(--secondary);
            font-style: italic;
            font-size: 0.9rem;
            margin-top: 0.5rem;
          }
          .top-container {
            display: flex;
            grid-area: top;
            align-items: center;
          }
          @media (max-width: 800px) {
            .container {
              grid-template-columns: 20rem 15rem;
              grid-template-rows: 2rem 2rem auto auto 1fr;
              grid-template-areas:
                "top . "
                "middle  ."
                "bottom ."
                "comment comment"
                "button button";
            }
            .icon-btn-container {
              margin-top: 1rem;
            }
            @media (max-width: 1000px) {
              .container {
                grid-template-columns: 15rem 5rem;
                grid-template-rows: 2rem 2rem auto auto 1fr;
                grid-template-areas:
                  "top . "
                  "middle  ."
                  "bottom ."
                  "comment comment"
                  "button button";
              }
          }
        `}
      </style>
    </>
  );
};

export default LinckCards;
