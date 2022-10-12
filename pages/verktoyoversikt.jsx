import React from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import VerktoyOversikt from "../src/components/verktoy/VerktoyOversikt";

const oversiktsegmenter = () => {
  return (
    <>
      <div className="container">
        <PageLayoutSidebar>
          <SideBar />
          <VerktoyOversikt />
        </PageLayoutSidebar>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default oversiktsegmenter;
