import React from "react";

const HistorikkCard = ({ data }) => {
  return (
    <>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="card">
              <p className="date">{item.date}</p>
              <div className="text-container">
                <h4 className="mb">{item.title}</h4>
                <p className="mb">{item.description}</p>
              </div>
              <div className="img-container">
                <img className="img" src={item.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .card {
            background: var(--text);
            margin-bottom: 1rem;
            padding: 1rem;
          }
          .container {
          }
          .date {
            margin-bottom: 0.5rem;
          }
          .img {
            width: 100%;
          }
          .img-container {
            width: 20rem;
          }
          .text-container {
            width: 35rem;
          }
        `}
      </style>
    </>
  );
};

export default HistorikkCard;
