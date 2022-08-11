import React from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/SideBar";

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
            background: grey;
          }
        `}
      </style>
    </>
  );
};

export default segmentoversiktvisuell;
