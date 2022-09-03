import React from "react";
import styles from "../../../styles/common/ModalComponentEdit.module.css";

const ModalComponentEdit = ({
  title,
  cancel,
  icon,
  btnBorder,
  actionBtnTxt,
  description,
  actionHover,
  getSerial,
  actionBtn,
  setGetCommentInput,
  error,
  commentInput,
  serial,
  type,
}) => {
  return (
    <>
      <div className={styles.mainContainer}>
        {error && <h1 className="error">{error}</h1>}
        <div className={styles.container}>
          <div className={styles.iconContainer}>{icon}</div>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h1 className={styles.header}>
                {title}:{" "}
                <span style={{ color: "var(--primary)" }}>{getSerial}</span>
              </h1>
              {commentInput && (
                <textarea
                  rows="8"
                  cols="35"
                  name="text"
                  placeholder="Enter text"
                  onChange={(e) => setGetCommentInput(e.target.value)}
                />
              )}
            </div>
            <p className={styles.description}>{description}</p>

            <button className="btn1" onClick={actionBtn}>
              {actionBtnTxt}
            </button>
            <button className="btn2" onClick={() => cancel(false)}>
              Avbryt
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn1 {
          padding: 0.5rem;
          width: 6.5rem;
          margin-right: 1rem;
          background: transparent;

          border-radius: 5px;
          color: var(--primary);
        }
        .btn:hover {
          background: var(--text);
          cursor: pointer;
        }
        .btn1 {
          background: transparent;
          border: 1px solid var(--primary);
          border-radius: 10px;
          padding: 0.4rem 0;
          color: ${btnBorder};
          transition: 0.5s;
          grid-row: 9/10;
          grid-column: 7/10;
          width: 6.5rem;
        }
        .btn1:hover {
          background: var(--text);
          cursor: pointer;
        }
        .btn2 {
          background: transparent;
          border: 1px solid var(--primary);
          border-radius: 10px;
          padding: 0.4rem 0;
          color: black;
          transition: 0.5s;
          grid-row: 9/10;
          grid-column: 4/6;
          width: 6.5rem;
          margin-left: -2rem;
        }
        .btn2:hover {
          background: var(--text);
          cursor: pointer;
        }
        .input {
          height: 2rem;
        }
        .error {
          color: red;
          position: absolute;
          top: 15rem;
        }
      `}</style>
    </>
  );
};

export default ModalComponentEdit;
