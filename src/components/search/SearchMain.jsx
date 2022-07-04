import React from "react";

const SearchMain = () => {
  return (
    <>
      <div className="content-container">
        <div>
          <input className="input" placeholder="Søk i linckblad" />
        </div>
      </div>
      <style jsx>{`
        .input {
          padding: 0.5rem;
          border-radius: 5px;
          border: none;
          outline: none;
          background: grey;
        }
      `}</style>
    </>
  );
};

export default SearchMain;
