import React from "react";
const PageLayoutSidebar = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 15rem 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "sideBar content";
            min-height: 100vh;
          }
          @media (max-width: 1000px) {
            .container {
              grid-template-areas: "content content";
            }
          }
        `}
      </style>
    </>
  );
};
export default PageLayoutSidebar;
