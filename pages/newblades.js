import React from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/SideBar";

import NewBladesMain from "../src/components/newblades/NewBladesMain";

const newblades = () => {
  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <NewBladesMain />
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

export default newblades;
