import React from "react";
import Colors from "../src/Colors";
import VisuellBladoversikt from "../src/components/bladoversiktvisuell/VisuellBladoversikt";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";

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
            background: white;
          }
        `}
      </style>
    </>
  );
};

export default bladoversiktvisuell;
