import React from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import RedigerSegmenterMain from "../src/components/redigersegmenter/RedigerSegmenterMain";

const redigersegmenter = () => {
  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <RedigerSegmenterMain />
      </PageLayoutSidebar>
    </>
  );
};

export default redigersegmenter;
