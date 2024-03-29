import React from "react";

const FilterComponent = ({ input, title }) => {
  return (
    <>
      <div className="container">
        <label className="label">Velg kategori: </label>

        <select onChange={(e) => input(e.target.value)} className="select">
          <option value="Service">Service</option>
          <option value="Reparasjoner">Reparasjoner</option>
          <option value="Annet">Annet</option>
        </select>
        <h1 className="header">{title}</h1>
      </div>
      <style jsx>
        {`
          .container {
          }
          .header {
            margin-top: 1rem;
            font-size: 2rem;
          }
          .label {
            color: var(--text2);
          }
          .select {
            background: var(--secondary);
            border: none;
            color: var(--text);
            margin-left: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default FilterComponent;
