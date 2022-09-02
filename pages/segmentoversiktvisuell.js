import React from "react";
import Colors from "../src/Colors";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";

import SegmenterMainPage from "../src/components/segmenter/SegmenterMainPage";

const segmentoversiktvisuell = () => {
  return (
    <>
      <div className="container">
        <PageLayoutSidebar>
          <SideBar />
          <SegmenterMainPage />
        </PageLayoutSidebar>
      </div>
      <style jsx>
        {`
          .container {
            background: var(--text);
          }
        `}
      </style>
    </>
  );
};

export default segmentoversiktvisuell;
