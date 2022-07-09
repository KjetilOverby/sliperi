import React from "react";
import { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/MyContext";

const SearchMain = () => {
  const { linckBlades } = useContext(MyContext);

  return (
    <>
      <div className="content-container">
        <div>
          <input className="input" placeholder="Søk i linckblad" />
        </div>
        <div>
          {linckBlades && linckBlades.map((item) => <p>{item.serial}</p>)}
        </div>
      </div>
      <style jsx>{`
        .input {
          padding: 0.5rem;
          border-radius: 5px;
          border: none;
          outline: none;
          background: #dedede;
        }
      `}</style>
    </>
  );
};

export default SearchMain;
