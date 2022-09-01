import React from "react";

const InputComponent = ({ setGetAntall }) => {
  return (
    <>
      <div className="container">
        <input
          onChange={(e) => setGetAntall(e.target.value)}
          className="input"
          type="number"
        />
      </div>
      <style jsx>
        {`
          .container {
          }
          .input {
            font-size: 1.5rem;
            width: 4.5rem;
          }
        `}
      </style>
    </>
  );
};

export default InputComponent;
