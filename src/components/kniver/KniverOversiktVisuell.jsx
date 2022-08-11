import React from "react";
import ToolImageCard from "../common/ToolImageCard";
import v40kniv from "../../../assets/kniver/v40kniv.jpg";
import v40motsl from "../../../assets/kniver/v40motsl.jpg";
import v25motst from "../../../assets/kniver/v25motst.jpg";
import v40Bolt from "../../../assets/kniver/v40Bolt.jpg";
import v40justskruer from "../../../assets/kniver/v40justskruer.jpg";
import vpp34kniv from "../../../assets/kniver/vpp34kniv.jpg";
import vpp34holder from "../../../assets/kniver/vpp34holder.jpg";
import vpp34motstH from "../../../assets/kniver/vpp34motstH.jpg";
import vpp34motstV from "../../../assets/kniver/vpp34motstV.jpg";
import vpp34Bolt from "../../../assets/kniver/vpp34Bolt.jpg";
import vpp34justSkrue from "../../../assets/kniver/vpp34justSkrue.jpg";

const KniverOversiktVisuell = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="main-header">Kniver og motstål</h1>
        <h1 className="card-header">Reduser kniver (ZD1/ZD2)</h1>
        <hr
          style={{
            color: "lightgrey",
            marginTop: "-1.8rem",
            marginBottom: "2rem",
          }}
        />
        <div className="container">
          <ToolImageCard
            img={v40kniv}
            title="Reduserkniv"
            type="V25-24-054"
            dim=" 92x105x12mm H945"
            antTenner=""
            antMaskin="30"
            maskin="V40 (ZD1/ZD2)"
          />
          <ToolImageCard
            img={v40motsl}
            title="Motstål rekke 1"
            type="V40-41-324"
            dim="92x80x30mm"
            antTenner=""
            antMaskin="10"
            maskin="V40 (ZD1/ZD2)"
          />
          <ToolImageCard
            img={v25motst}
            title="Motstål rekke 2 og 3"
            type="V25-24-055"
            dim="92x80x22"
            antTenner=""
            antMaskin="20"
            maskin="V40 (ZD1/ZD2)"
          />
          <ToolImageCard
            img={v40Bolt}
            title="Bolt"
            type=""
            dim="M20x45"
            antTenner=""
            antMaskin="30"
            maskin="V40 (ZD1/ZD2)"
          />
          <ToolImageCard
            img={v40justskruer}
            title="Stillskruer"
            type=""
            dim=" M6x40"
            antTenner=""
            antMaskin="60"
            maskin="V40 (ZD1/ZD2)"
          />
        </div>
        <h1 className="card-header">Fres 1/4 (VP34/VPP34 ombygd)</h1>
        <hr
          style={{
            color: "lightgrey",
            marginTop: "-1.8rem",
            marginBottom: "2rem",
          }}
        />
        <div className="container">
          <ToolImageCard
            img={vpp34kniv}
            title="Kniv"
            type=""
            dim="41x105x8mm"
            antTenner=""
            antMaskin="48"
            maskin="VP34/VPP34"
          />
          <ToolImageCard
            img={vpp34holder}
            title="Knivholder"
            type="VPS-28-087"
            dim=""
            antTenner=""
            antMaskin="48"
            maskin="VP34/VPP34"
          />
          <ToolImageCard
            img={vpp34motstV}
            title="Motstål høyre"
            type="VPS-28-072"
            dim="41x88,5x27,5mm"
            antTenner=""
            antMaskin="24"
            maskin="VP34/VPP34"
          />
          <ToolImageCard
            img={vpp34motstH}
            title="Motstål venstre"
            type="VPS-28-071"
            dim="41x88,5x27,5mm"
            antTenner=""
            antMaskin="24"
            maskin="VP34/VPP34"
          />
          <ToolImageCard
            img={vpp34Bolt}
            title="Bolt"
            type="Unbraco"
            dim="M20x60"
            antTenner=""
            antMaskin="48"
            maskin="VP34/VPP34"
          />
          <ToolImageCard
            img={vpp34justSkrue}
            title="Stillskruer"
            type="Unbraco"
            dim="M5x25"
            antTenner=""
            antMaskin="48"
            maskin="VP34/VPP34"
          />
        </div>
      </div>
      <style jsx>
        {`
          .card-header {
            font-weight: 300;
            color: lightgrey;
            margin-bottom: 2rem;
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
            color: #fff;
          }
        `}
      </style>
    </>
  );
};

export default KniverOversiktVisuell;
