import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
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
import vp34kniv from "../../../assets/kniver/vp34kniv.jpg";
import vp34motst from "../../../assets/kniver/vp34motst.jpg";
import vp34Bolt from "../../../assets/kniver/vp34bolt.jpg";
import vp34justSkrue from "../../../assets/kniver/vp34justSkrue.jpg";
import vp48kniv from "../../../assets/kniver/vp48kniv.jpg";
import vp48motstH from "../../../assets/kniver/vp48motstH.jpg";
import vp48motstV from "../../../assets/kniver/vp48motstV.jpg";
import bruks from "../../../assets/kniver/bruks.jpg";
import bruksmotst15 from "../../../assets/kniver/bruksmotst15.jpg";
import bruksmotst44 from "../../../assets/kniver/bruksmotst44.jpg";
import bruksJust from "../../../assets/kniver/bruksJust.jpg";

const KniverOversiktVisuell = () => {
  const { tools } = useContext(MyContext);
  return (
    <>
      <div className="content-container">
        <h1 className="main-header">Kniver og motstål</h1>
        <h1 className="card-header">Reduser kniver (ZD1/ZD2)</h1>
        <hr />
        <div className="container">
          <ToolImageCard
            img={v40kniv}
            title="Reduserkniv"
            type="V25-24-054"
            dim=" 92x105x12mm H945"
            antTenner=""
            antMaskin="30"
            maskin="V40 (ZD1/ZD2)"
            dName={tools && tools[8].type}
            antall={tools && tools[8].antall}
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
            dim="M20x45 30 mm pipe"
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
        <hr />
        <div className="container">
          <ToolImageCard
            img={vpp34kniv}
            title="Kniv"
            type=""
            dim="41x105x8mm"
            antTenner=""
            antMaskin="48"
            maskin="VP34/VPP34"
            dName={tools && tools[9].type}
            antall={tools && tools[9].antall}
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
            type="Unbraco 17mm lavt hode"
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
        <h1 className="card-header">Fres 2/3 horizontal (VP34)</h1>
        <hr />
        <div className="container">
          <ToolImageCard
            img={vp34kniv}
            title="Kniv"
            type=""
            dim=""
            antTenner=""
            antMaskin="8"
            maskin="VP34"
            dName={tools && tools[10].type}
            antall={tools && tools[10].antall}
          />
          <ToolImageCard
            img={vp34motst}
            title="Motstål"
            type=""
            dim=""
            antTenner=""
            antMaskin="8"
            maskin="VP34"
          />
          <ToolImageCard
            img={vp34Bolt}
            title="Bolt"
            type="Unbraco 12mm lavt hode"
            dim="M16x45"
            antTenner=""
            antMaskin="16"
            maskin="VP34"
          />
          <ToolImageCard
            img={vp34justSkrue}
            title="Stillskruer"
            type="Unbraco"
            dim=" M6x30"
            antTenner=""
            antMaskin="16"
            maskin="VP34"
          />
        </div>
        <h1 className="card-header">Fres 3 Vertical (VP48)</h1>

        <div className="container">
          <ToolImageCard
            img={vp48kniv}
            title="Kniv"
            type="VP48-08-037"
            dim="50x100x10mm"
            antTenner=""
            antMaskin="8"
            maskin="VP48"
            dName={tools && tools[11].type}
            antall={tools && tools[11].antall}
          />
          <ToolImageCard
            img={vp48motstH}
            title="Motstål høyre"
            type=""
            dim="55x85x25x6mm"
            antTenner=""
            antMaskin="8"
            maskin="VP48"
          />
          <ToolImageCard
            img={vp48motstV}
            title="Motstål ventre"
            type=""
            dim="55x85x25x6mm"
            antTenner=""
            antMaskin="16"
            maskin="VP34"
          />
          <ToolImageCard
            img={vp34Bolt}
            title="Bolt"
            type="Unbraco 12mm lavt hode"
            dim="M16x45"
            antTenner=""
            antMaskin="16"
            maskin="VP48"
          />
          <ToolImageCard
            img={vp34justSkrue}
            title="Stillskruer"
            type="Unbraco"
            dim=" M6x30"
            antTenner=""
            antMaskin="16"
            maskin="VP48"
          />
        </div>
        <h1 className="card-header">Råsortering/stikkhugger (Bruks)</h1>
        <div className="container">
          <ToolImageCard
            img={bruks}
            title="Huggerkniv"
            type="V-KH5300"
            dim="575x185x15/16mm 6-214,2/332"
            antTenner=""
            antMaskin="2"
            maskin="Bruks 820 CS"
            dName={tools && tools[12].type}
            antall={tools && tools[12].antall}
          />
          <ToolImageCard
            img={bruksmotst15}
            title=""
            type="V-KM7100"
            dim="580x59x15"
            antTenner=""
            antMaskin="2"
            maskin="Bruks 820 CS"
          />
          <ToolImageCard
            img={bruksmotst44}
            title=""
            type="580x59x44"
            dim="V-KM5105"
            antTenner=""
            antMaskin="2"
            maskin=" Bruks 820 CS"
          />
          <ToolImageCard
            img={bruksJust}
            title="Stillskruer"
            type=""
            dim="M10x80"
            antTenner=""
            antMaskin="4"
            maskin=""
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
              height: auto;
              place-items: center;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default KniverOversiktVisuell;
