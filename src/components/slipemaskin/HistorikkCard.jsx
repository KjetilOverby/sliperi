import React from "react";

const HistorikkCard = ({ data }) => {
  return (
    <>
      <div className="container">
        {data &&
          data.map((item) => {
            return (
              <div key={item.title} id={item.title} className="card">
                <p className="date">{item.date}</p>
                <div className="text-container">
                  <h2 className="header mb card-header">{item.title}</h2>
                  <p className="mt mb">{item.description}</p>
                  <div className="list-container">
                    {item.list &&
                      item.list.map((listItem) => {
                        return (
                          <ul key={item}>
                            <li>{listItem}</li>
                          </ul>
                        );
                      })}
                  </div>
                  <div className="img-container">
                    <img className="img" src={item.img} alt="" />
                    <img className="img" src={item.img2} alt="" />
                    <img className="img" src={item.img3} alt="" />
                    <img className="img" src={item.img4} alt="" />
                    <img className="img" src={item.img5} alt="" />
                    <img className="img" src={item.img6} alt="" />
                    <img className="img" src={item.img7} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .card {
            background: var(--primary);
            margin-bottom: 2rem;
            padding: 1rem;
            border-radius: 5px;
          }
          .card-header {
            color: var(--text);
            font-style: normal;
          }
          .container {
          }
          .date {
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: var(--text2);
          }
          .img {
            width: 100%;
            border-radius: 5px;
          }
          .img-container {
            width: 20rem;
            transition: 0.5s;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
            grid-gap: 1rem;
            width: 70vw;
          }
          .list-container {
            margin-bottom: 1rem;
          }
          .text-container {
            width: 55rem;
            color: var(--text);
            font-style: italic;
          }

          @media only screen and (max-width: 1000px) {
            .text-container {
              width: 100%;
            }
            .img-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default HistorikkCard;
