import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import mkv1 from "../../../assets/linckblad/mkv3.6.jpg";
import mkv2 from "../../../assets/linckblad/mkv3.8.jpg";
import mkv3 from "../../../assets/linckblad/mkv4.0.jpg";
import mkv4 from "../../../assets/linckblad/mkv4.2.jpg";
import mkv5 from "../../../assets/linckblad/mkv4.4.jpg";
import mkv6 from "../../../assets/linckblad/mkv4.6.jpg";
import nBlad from "../../../assets/linckblad/nBlad.jpg";
import vs66H from "../../../assets/linckblad/vs66H.jpg";
import vs66V from "../../../assets/linckblad/vs66V.jpg";
import vs66FlensH from "../../../assets/linckblad/vs66FlensH.jpg";
import vs66FlensV from "../../../assets/linckblad/vs66FlensV.jpg";
import nessjoH from "../../../assets/linckblad/nessjoH.jpg";
import nessjoV from "../../../assets/linckblad/nessjoV.jpg";
import trimmerJusterverk from "../../../assets/sagblad/trimmerJusterverk.jpg";
import eksakt from "../../../assets/sagblad/eksaktKappe.jpg";
import endekapp from "../../../assets/sagblad/endekapp.jpg";
import trimmerBord from "../../../assets/sagblad/trimmerBord.jpg";
import skrueVs66 from "../../../assets/linckblad/skrueVs66.jpg";
import boltDobbelPost from "../../../assets/linckblad/boltDobbelPost.jpg";
import boltEnkelVs66 from "../../../assets/linckblad/boltEnkelVs66.jpg";
import mutter from "../../../assets/linckblad/mutter.jpg";
import vs66EnkBolt from "../../../assets/linckblad/vs66EnkBolt.jpg";
import VisualToolImageComponent from "../common/VisualToolImageComponent";
import tooldata from "../../data/tooldata";

const VisuellBladoversikt = () => {
  const { tabellLinckBlad } = useContext(MyContext);

  return (
    <>
      <div className="content-container">
        <h1 className="visuell-header">MKV delingssag</h1>
        <hr />
        <div className="container">
          <VisualToolImageComponent
            img={mkv1}
            title="Kanefusa 2.2-3.6 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø445x2,2-3,6 ø150"
            zAnt="36"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[0]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[0].typeCount}
            art={tooldata.k22.art}
          />
          <VisualToolImageComponent
            img={mkv2}
            title="Kanefusa 2.4-3.8 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø445x2,4-3,8 ø150"
            zAnt="36"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[1]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[1].typeCount}
            art={tooldata.k24.art}
          />
          <VisualToolImageComponent
            img={mkv3}
            title="Kanefusa 2.6-4.0 MKV"
            type="Kanefusa TIMBER-MAX"
            dim="Ø445x2,6-4,0 ø150"
            zAnt="36"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[2]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[2].typeCount}
            art={tooldata.k26.art}
          />
          <VisualToolImageComponent
            img={mkv4}
            title="Kanefusa 2.8-4.2 MKV"
            type="Kanefusa TIMBERMAX-MAX"
            dim="Ø445x2,8-4,2 ø150"
            zAnt="36"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[3]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[3].typeCount}
            art={tooldata.k28.art}
          />
          <VisualToolImageComponent
            img={mkv5}
            title="Kanefusa 3.0-4.4 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø445x3,0-4,4 ø150"
            zAnt="36"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[4]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[4].typeCount}
            art={tooldata.k30.art}
          />
          <VisualToolImageComponent
            img={mkv6}
            title="Kanefusa 3.2-4.6 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø510x3,2-4,6 ø150"
            zAnt="36"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[5]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[5].typeCount}
            art={tooldata.k32.art}
          />
        </div>
        <h1 className="visuell-header">VS-66 bordsag</h1>
        <hr />
        <div className="container">
          <VisualToolImageComponent
            img={nBlad}
            title="Kanefusa N-blad VS-66"
            type="Kanefusa Hi-MAX"
            dim=" Ø475x3,2/4,8 ø120"
            zAnt="30"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[6]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[6].typeCount}
            art={tooldata.nBlad.art}
          />
          <VisualToolImageComponent
            img={vs66H}
            title="Kanefusa VS-66 Høyre"
            type="Kanefusa HM Hi-MAX"
            dim="Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[7]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[7].typeCount}
            art={tooldata.vs66h.art}
          />
          <VisualToolImageComponent
            img={vs66V}
            title="Kanefusa VS-66 Venstre"
            type="Kanefusa HM Hi-MAX"
            dim="Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[8]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[8].typeCount}
            art={tooldata.vs66v.art}
          />
          <VisualToolImageComponent
            img={vs66FlensH}
            title="Kanefusa VS-66 Høyre Flens"
            type="Kanefusa HM Hi-MAX"
            dim=" Ø475x3,6/5,0/6,8 ø120"
            zAnt="24"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[9]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[9].typeCount}
            art={tooldata.vs66hF.art}
          />
          <VisualToolImageComponent
            img={vs66FlensV}
            title="Kanefusa VS-66 Venstre Flens"
            type="Kanefusa HM Hi-MAX"
            dim=" Ø475x3,6/5,0/6,8 ø120"
            zAnt="24"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[10]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[10].typeCount}
            art={tooldata.vs66vF.art}
          />
          <VisualToolImageComponent
            img={nessjoH}
            title="Nässjö VS-66 Høyre"
            type="Nässjö"
            dim=" Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[11]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[11].typeCount}
          />
          <VisualToolImageComponent
            img={nessjoV}
            title="Nässjö VS-66 Venstre"
            type="Nässjö"
            dim=" Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
            dataName={tabellLinckBlad && tabellLinckBlad[12]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[12].typeCount}
          />
          <VisualToolImageComponent
            img={skrueVs66}
            title="Skrue for feste av blad"
            type=""
            dim="M8x20 5mm unbrako senk"
            zAnt=""
            angle=""
            dataName=""
            antall=""
          />
          <VisualToolImageComponent
            img={boltDobbelPost}
            title="Bolt for flensblad"
            type=""
            dim="M12x180 8mm unbrako senk"
            zAnt=""
            angle=""
            dataName=""
            antall=""
          />
          <VisualToolImageComponent
            img={boltEnkelVs66}
            title="Bolt for enkeltblad indre ring"
            type=""
            dim="M12x160 10mm unbrako"
            zAnt=""
            angle=""
            dataName=""
            antall=""
          />
          <VisualToolImageComponent
            img={mutter}
            title="Mutter"
            type=""
            dim="M12 19mm sekskant"
            zAnt=""
            angle=""
            dataName=""
            antall=""
          />
          <VisualToolImageComponent
            img={vs66EnkBolt}
            title="Skrue VS-66"
            type=""
            dim=""
            zAnt=""
            angle=""
            dataName=""
            antall=""
          />
        </div>
        <h1 className="visuell-header">Trimmer Justerverk/råsortering</h1>
        <hr />
        <div className="container">
          <VisualToolImageComponent
            img={trimmerJusterverk}
            title="Kanefusa Trimmer"
            type="V-SH0985 SUPER Hi-MAX"
            dim="Ø500x4,0/2,8ø30mm -5˚"
            zAnt="96"
            angle="-5"
            dataName={tabellLinckBlad && tabellLinckBlad[13]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[13].typeCount}
            art={tooldata.jvTrimmer.art}
          />
          <VisualToolImageComponent
            img={eksakt}
            title="Eksaktkappe"
            type="V-SH1003"
            dim="Ø400x3,5/2,5 ø30 -5˚"
            zAnt="96"
            angle="-5"
            dataName={tabellLinckBlad && tabellLinckBlad[14]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[14].typeCount}
            art={tooldata.jvEksakt.art}
          />
          <VisualToolImageComponent
            img={endekapp}
            title="Endekapp"
            type="V-SH0675"
            dim="Ø610x4,4/3,3-ø30 10˚"
            zAnt="96"
            angle="10"
            dataName={tabellLinckBlad && tabellLinckBlad[15]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[15].typeCount}
            art={tooldata.jvEndekapp.art}
          />
          <VisualToolImageComponent
            img={trimmerBord}
            title="Trimmer bordsortering"
            type=" V-SH1008"
            dim="Ø450x4,0/2,8 ø35"
            zAnt="72"
            angle="10"
            dataName={tabellLinckBlad && tabellLinckBlad[16]._id.type}
            antall={tabellLinckBlad && tabellLinckBlad[16].typeCount}
            art={tooldata.rsTrimmer.art}
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(22rem, 22rem));
            grid-gap: 2rem;
            align-items: left;
            margin-bottom: 4rem;
          }
          .visuell-header {
            margin: 2rem 0;
            color: lightgrey;
            font-weight: 300;
            font-size: 1.3rem;
          }
          @media only screen and (max-width: 600px) {
            .container {
              place-items: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default VisuellBladoversikt;
