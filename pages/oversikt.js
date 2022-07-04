import React from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/SideBar";
import OversiktMain from "../src/components/OversiktMain";

const oversikt = () => {
  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <OversiktMain />
      </PageLayoutSidebar>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default oversikt;
