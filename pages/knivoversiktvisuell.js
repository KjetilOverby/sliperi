import React from "react";
import PagelayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import KniverOversiktVisuell from "../src/components/kniver/KniverOversiktVisuell";
import Colors from "../src/Colors";

const knivoversiktvisuell = () => {
  return (
    <>
      <div className="container">
        <PagelayoutSidebar>
          <SideBar />
          <KniverOversiktVisuell />
        </PagelayoutSidebar>
      </div>
      <style jsx>
        {`
          .container {
            background: var(--secondary);
          }
        `}
      </style>
    </>
  );
};

export default knivoversiktvisuell;
