import React from "react";
import mkv1 from "../../../assets/linckblad/mkv3.6.jpg";
import mkv2 from "../../../assets/linckblad/mkv3.8.jpg";
import mkv3 from "../../../assets/linckblad/mkv4.0.jpg";
import mkv4 from "../../../assets/linckblad/mkv4.2.jpg";
import mkv5 from "../../../assets/linckblad/mkv4.4.jpg";
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
import VisualToolImageComponent from "../common/VisualToolImageComponent";

const VisuellBladoversikt = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="visuell-header">MKV delingssag</h1>
        <hr
          style={{
            color: "lightgrey",
            marginTop: "-1.8rem",
            marginBottom: "2rem",
          }}
        />
        <div className="container">
          <VisualToolImageComponent
            img={mkv1}
            title="Kanefusa 2.2-3.6 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø445x2,2-3,6 ø150"
            zAnt="36"
            angle="25"
          />
          <VisualToolImageComponent
            img={mkv2}
            title="Kanefusa 2.4-3.8 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø445x2,4-3,8 ø150"
            zAnt="36"
            angle="25"
          />
          <VisualToolImageComponent
            img={mkv3}
            title="Kanefusa 2.6-4.0 MKV"
            type="Kanefusa TIMBER-MAX"
            dim="Ø445x2,6-4,0 ø150"
            zAnt="36"
            angle="25"
          />
          <VisualToolImageComponent
            img={mkv4}
            title="Kanefusa 2.8-4.2 MKV"
            type="Kanefusa TIMBERMAX-MAX"
            dim="Ø445x2,8-4,2 ø150"
            zAnt="36"
            angle="25"
          />
          <VisualToolImageComponent
            img={mkv5}
            title="Kanefusa 3.0-4.4 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø445x3,0-4,4 ø150"
            zAnt="36"
            angle="25"
          />
          <VisualToolImageComponent
            img={mkv5}
            title="Kanefusa 3.2-4.6 MKV"
            type="Kanefusa Hi-MAX"
            dim="Ø510x3,2-4,6 ø150"
            zAnt="36"
            angle="25"
          />
        </div>
        <h1 className="visuell-header">VS-66 bordsag</h1>
        <hr
          style={{
            color: "lightgrey",
            marginTop: "-1.8rem",
            marginBottom: "2rem",
          }}
        />
        <div className="container">
          <VisualToolImageComponent
            img={nBlad}
            title="Kanefusa N-blad VS-66"
            type="Kanefusa Hi-MAX"
            dim=" Ø475x3,2/4,8 ø120"
            zAnt="30"
            angle="25"
          />
          <VisualToolImageComponent
            img={vs66H}
            title="Kanefusa VS-66 Høyre"
            type="Kanefusa HM Hi-MAX"
            dim="Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
          />
          <VisualToolImageComponent
            img={vs66V}
            title="Kanefusa VS-66 Venstre"
            type="Kanefusa HM Hi-MAX"
            dim="Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
          />
          <VisualToolImageComponent
            img={vs66FlensH}
            title="Kanefusa VS-66 Høyre Flens"
            type="Kanefusa HM Hi-MAX"
            dim=" Ø475x3,6/5,0/6,8 ø120"
            zAnt="24"
            angle="25"
          />
          <VisualToolImageComponent
            img={vs66FlensV}
            title="Kanefusa VS-66 Venstre Flens"
            type="Kanefusa HM Hi-MAX"
            dim=" Ø475x3,6/5,0/6,8 ø120"
            zAnt="24"
            angle="25"
          />
          <VisualToolImageComponent
            img={nessjoH}
            title="Nässjö VS-66 Høyre"
            type="Nässjö"
            dim=" Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
          />
          <VisualToolImageComponent
            img={nessjoV}
            title="Nässjö VS-66 Venstre"
            type="Nässjö"
            dim=" Ø475x3,6/5,0 ø120"
            zAnt="27"
            angle="25"
          />
        </div>
        <h1 className="visuell-header">Trimmer Justerverk/råsortering</h1>
        <hr
          style={{
            color: "lightgrey",
            marginTop: "-1.8rem",
            marginBottom: "2rem",
          }}
        />
        <div className="container">
          <VisualToolImageComponent
            img={trimmerJusterverk}
            title="Kanefusa Trimmer"
            type="V-SH0985 SUPER Hi-MAX"
            dim="Ø500x4,0/2,8ø30mm -5˚"
            zAnt="96"
            angle="-5"
          />
          <VisualToolImageComponent
            img={eksakt}
            title="Eksaktkappe"
            type="V-SH1003"
            dim="Ø400x3,5/2,5 ø30 -5˚"
            zAnt="96"
            angle="-5"
          />
          <VisualToolImageComponent
            img={endekapp}
            title="Endekapp"
            type="V-SH0675"
            dim="Ø610x4,4/3,3-ø30 10˚"
            zAnt="96"
            angle="10"
          />
          <VisualToolImageComponent
            img={trimmerBord}
            title="Trimmer bordsortering"
            type=" V-SH1008"
            dim="Ø450x4,0/2,8 ø35"
            zAnt="72"
            angle="10"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            grid-gap: 4rem;
          }
          .visuell-header {
            margin: 2rem 0;
            color: lightgrey;
            font-weight: 300;
          }
        `}
      </style>
    </>
  );
};

export default VisuellBladoversikt;
