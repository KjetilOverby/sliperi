import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import ToolImageCard from "../common/ToolImageCard";
import v40segmentH from "../../../assets/segmenter/v40segmentH.jpg";
import v40segmentV from "../../../assets/segmenter/v40segmentV.jpg";
import v40segmentBolt from "../../../assets/segmenter/v40segmenterBolt.jpg";
import vpp32SegmentH from "../../../assets/segmenter/vpp32segmentH.jpg";
import vpp32SegmentV from "../../../assets/segmenter/vpp32segmentV.jpg";
import vpp32Bolt from "../../../assets/segmenter/vpp32Bolt.jpg";
import vp32SegmentH from "../../../assets/segmenter/vp32segmentH.jpg";
import vp32SegmentV from "../../../assets/segmenter/vp32segmentV.jpg";
import vp34SegmentSkrue from "../../../assets/segmenter/vp34segmentskrue.jpg";
import vp48SegmentH from "../../../assets/segmenter/vp48segmentH.jpg";
import vp48SegmentV from "../../../assets/segmenter/vp48segmentV.jpg";

const SegmenterMainPage = () => {
  const { tools } = useContext(MyContext);

  return (
    <>
      <div className="content-container">
        <h1 className="main-header">SEGMENTER</h1>
        <h1 className="card-header">Reduserer segment (ZD1/ZD2)</h1>
        <hr />
        <div className="container">
          <ToolImageCard
            img={v40segmentH}
            title="Reduserersegment Høyre"
            type=" V40-41-117-SV"
            dim="ø854,2/698-4,5/3,5"
            antTenner="14"
            antMaskin="5"
            maskin="V40"
            dName={tools[0].type}
            antall={tools[0].antall}
          />
          <ToolImageCard
            img={v40segmentV}
            title="Reduserersegment Venstre"
            type=" V40-41-117-SV"
            dim="ø854,2/698-4,5/3,5"
            antTenner="14"
            antMaskin="5"
            maskin="V40"
            dName={tools[1].type}
            antall={tools[1].antall}
          />
          <ToolImageCard
            img={v40segmentBolt}
            title="Bolt til V40 segmenter"
            type=""
            dim="M12x30 19mm pipe"
            antTenner=""
            antMaskin="30"
            maskin="V40"
          />
        </div>
        <h1 className="card-header">Fres 1/4 segmenter (VPS)</h1>
        <hr />
        <div className="container">
          <ToolImageCard
            img={vpp32SegmentH}
            title="Fres 1/4 segment høyre"
            type="VPS-28-053"
            dim="ø401/200,4-3,5/2,5/8,00"
            antTenner="10"
            antMaskin="6"
            maskin=" VP34/VPP34"
            dName={tools[2].type}
            antall={tools[2].antall}
          />
          <ToolImageCard
            img={vpp32SegmentV}
            title="Fres 1/4 segment venstre"
            type="VPS-28-053"
            dim="ø401/200,4-3,5/2,5/8,00"
            antTenner="10"
            antMaskin="6"
            maskin=" VP34/VPP34"
            dName={tools[3].type}
            antall={tools[3].antall}
          />
          <ToolImageCard
            img={vpp32Bolt}
            title="Bolt til Fres 1/4 segmenter"
            type=""
            dim="M10x20 17mm pipe"
            antTenner=""
            antMaskin="36"
            maskin=" VP34/VPP34"
          />
        </div>
        <h1 className="card-header">Fres 2</h1>
        <hr />
        <div className="container">
          <ToolImageCard
            img={vp32SegmentH}
            title="Fres 2 segment høyre"
            type="VP34-08-056"
            dim="ø403/305-3,5/2,5/5,00"
            antTenner="8"
            antMaskin="4"
            maskin="VP34"
            dName={tools[4].type}
            antall={tools[4].antall}
          />
          <ToolImageCard
            img={vp32SegmentV}
            title="Fres 2 segment venstre"
            type="VP34-08-056"
            dim="ø403/305-3,5/2,5/5,00"
            antTenner="8"
            antMaskin="4"
            maskin="VP34"
            dName={tools[5].type}
            antall={tools[5].antall}
          />
          <ToolImageCard
            img={vp34SegmentSkrue}
            title="Skrue til fres2 segmenter"
            type=""
            dim="M10x20 6mm unbraco"
            antTenner=""
            antMaskin="32"
            maskin=" VP34"
          />
        </div>
        <h1 className="card-header">Fres 3 (vertical/horisontal)</h1>
        <hr />
        <div className="container">
          <ToolImageCard
            img={vp48SegmentH}
            title="Fres 2 segment høyre"
            type="VP34-08-056"
            dim="ø403/305-3,5/2,5/5,00"
            antTenner="8"
            antMaskin="4"
            maskin="VP48"
            dName={tools[6].type}
            antall={tools[6].antall}
          />
          <ToolImageCard
            img={vp48SegmentV}
            title="Fres 2 segment venstre"
            type="VP34-08-056"
            dim="ø403/305-3,5/2,5/5,00"
            antTenner="8"
            antMaskin="4"
            maskin="VP48"
            dName={tools[7].type}
            antall={tools[7].antall}
          />
          <ToolImageCard
            img={vp34SegmentSkrue}
            title="Skrue til fres 3 segmenter"
            type=""
            dim="M10x20 6mm unbraco"
            antTenner=""
            antMaskin="32"
            maskin=" VP48"
          />
        </div>
      </div>
      <style jsx>
        {`
          .card-header {
            font-weight: 300;
            color: var(--text2);
            margin-bottom: 2rem;
            font-size: 1.2rem;
          }
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(22rem, 22rem));
            grid-gap: 2rem;
            align-items: left;
            margin-bottom: 4rem;
          }
          .main-header {
            margin-bottom: 5rem;
            font-weight: 100;
            color: var(--text);
          }
          @media only screen and (max-width: 1000px) {
            .container {
              place-items: center;
              grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
              width: 100vw;
            }
          }
        `}
      </style>
    </>
  );
};

export default SegmenterMainPage;
