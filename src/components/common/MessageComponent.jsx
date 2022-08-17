import React from "react";

const MessageComponent = ({ title, serial, message, animate }) => {
  return (
    <>
      <div className={`container ${animate}`}>
        <h4 className="title">
          {title} <span className="serial">{serial}</span>:
        </h4>

        <p className="message">{message}</p>
      </div>
      <style jsx>
        {`
          .container {
            background: linear-gradient(to right, #8cd89c, #337538);
            width: 20rem;
            position: absolute;
            z-index: 5000;
            top: 1rem;
            left: -20rem;
            padding: 0.5rem;
            border-radius: 5px;
          }
          .move {
            animation: move 5s;
          }
          .serial {
            color: orange;
          }
          .title {
            font-weight: 300;
          }
          .message {
            font-weight: 300;
            margin-top: 0.5rem;
          }
          @keyframes move {
            0% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(21rem);
            }
            50% {
              transform: translateX(21rem);
            }
            100% {
              transform: translateX(-15rem);
            }
          }
        `}
      </style>
    </>
  );
};

export default MessageComponent;
