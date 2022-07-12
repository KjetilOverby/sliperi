import React from "react";

const ModalComponent = ({
  title,
  text,
  icon,
  titleLeftBtn,
  titleRightBtn,
  cancel,
  action,
}) => {
  return (
    <>
      <div className="container">
        <div className="modal-container">
          <div className="modal-inner-container">
            <div className="icon-container">{icon}</div>
            <div className="title-text-container">
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
            <div>
              <button onClick={action} className="btn">
                {titleLeftBtn}
              </button>
              <button onClick={cancel} className="btn">
                {titleRightBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100vw;
            background: black;
            z-index: 2000;
            position: fixed;
            top: 0;
            left: 0;
            display: grid;
            place-items: center;
            animation: background 0.5s forwards;
          }
          .modal-container {
            width: 20rem;
            height: 20rem;
            background: lightgrey;
            border-radius: 10px;
            display: grid;
            place-items: center;
            animation: fadeInUpBig 0.5s;
          }
          .modal-inner-container {
            width: 16rem;
            height: 17rem;
            background: #fff;
            border-radius: 10px;
            position: relative;
            padding: 0.5rem;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.5);
          }
          .icon-container {
            width: 5.5rem;
            height: 5.5rem;
            border-radius: 50%;
            background: lightgrey;
            position: absolute;
            top: -3rem;
            left: 50%;
            transform: translateX(-50%);
            display: grid;
            place-items: center;
            box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.5);
          }
          .btn {
            padding: 0.5rem;
            width: 6.5rem;
            margin-right: 1rem;
          }
          .title-text-container {
            margin-top: 3rem;
          }
          @keyframes fadeInUpBig {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, 2000px, 0);
              transform: translate3d(0, 2000px, 0);
            }
            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @keyframes background {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.9;
            }
          }
        `}
      </style>
    </>
  );
};

export default ModalComponent;
