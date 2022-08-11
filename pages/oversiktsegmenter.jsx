import React from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import SegmenterOversikt from "../src/components/segmenter/SegmenterOversikt";

const oversiktsegmenter = () => {
  return (
    <>
      <div className="container">
        <PageLayoutSidebar>
          <SideBar />
          <SegmenterOversikt />
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
