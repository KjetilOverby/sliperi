import React from "react";
import VisuellBladoversikt from "../src/components/bladoversiktvisuell/VisuellBladoversikt";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/SideBar";

const bladoversiktvisuell = () => {
  return (
    <>
      <div className="container">
        <PageLayoutSidebar>
          <SideBar />
          <VisuellBladoversikt />
        </PageLayoutSidebar>
      </div>
      <style jsx>
        {`
          .container {
            background: grey;
          }
        `}
      </style>
    </>
  );
};

export default bladoversiktvisuell;
