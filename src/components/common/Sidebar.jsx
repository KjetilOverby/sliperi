import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMenuSharp } from "react-icons/io5";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Colors from "../../Colors";
const SideBar = () => {
  const { user, isAuthenticated } = useAuth0();
  const [activateOversikt, setActivateOversikt] = useState();
  const [activateSearch, setActivateSearch] = useState();
  const [activate3, setActivate3] = useState();
  const [activateNewBlades, setActivateNewBlades] = useState();
  const [activate4, setActivate4] = useState();
  const [activate5, setActivate5] = useState();
  const [activate6, setActivate6] = useState();
  const [activate7, setActivate7] = useState();
  const [activate8, setActivate8] = useState();
  const [activate9, setActivate9] = useState();
  const [activate10, setActivate10] = useState();
  const [activate11, setActivate11] = useState();
  const [activate12, setActivate12] = useState();
  const [activateAnimate, setActivateAnimate] = useState();
  const [activateHeader, setActivateHeader] = useState();
  const [activateFooter, setActivateFooter] = useState();
  const router = useRouter();
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const [openSidebar, setOpenSidebar] = useState(false);
  const [container, setContainer] = useState();
  const openSidebarHandler = () => {
    setOpenSidebar(!openSidebar);
  };
  useEffect(() => {
    if (openSidebar) {
      setContainer("container-open");
    } else if (!openSidebar) {
      setContainer("container-close");
    }
  }, [openSidebar]);
  useEffect(() => {
    if (!isMobile) {
      setOpenSidebar(true);
    }
  }, [isMobile]);
  useEffect(() => {
    if (router.pathname === "/oversikt") {
      setActivateOversikt("tab-active");
    } else if (router.pathname === "/search") {
      setActivateSearch("tab-active");
    } else if (router.pathname === "/newblades") {
      setActivateNewBlades("tab-active");
    } else if (router.pathname === "/bladoversiktvisuell") {
      setActivate4("tab-active");
    } else if (router.pathname === "/segmentoversiktvisuell") {
      setActivate5("tab-active");
    } else if (router.pathname === "/knivoversiktvisuell") {
      setActivate6("tab-active");
    } else if (router.pathname === "/verktoyoversikt") {
      setActivate7("tab-active");
    } else if (router.pathname === "/datesearch") {
      setActivate8("tab-active");
    } else if (router.pathname === "/datesearchtools") {
      setActivate9("tab-active");
    } else if (router.pathname === "/redigersegmenter") {
      setActivate10("tab-active");
    } else if (router.pathname === "/redigertools") {
      setActivate11("tab-active");
    } else if (router.pathname === "/slipemaskinhistorikk") {
      setActivate12("tab-active");
    }
  }, []);
  return (
    <>
      {isMobile && (
        <div onClick={openSidebarHandler} className="menu-icon-container">
          <IoMenuSharp style={{ fontSize: "1.5rem" }} />
        </div>
      )}
      {openSidebar && isMobile && (
        <div
          onClick={openSidebarHandler}
          className="menu-invisible-container"
        ></div>
      )}
      <div className={`container ${container}`}>
        <Link href="/">
          <p className={`logo`}>☯︎</p>
        </Link>
        <LoginButton />
        <LogoutButton />
        <h4 className="section-header">Sagblad</h4>
        <Link href="/search">
          <p className={`section-tab ${activateSearch}`}>Søk</p>
        </Link>
        <Link href="/oversikt">
          <p className={`section-tab ${activateOversikt}`}>Oversikt</p>
        </Link>
        <Link href="/datesearch">
          <p className={`section-tab ${activate8}`}>Datosøk</p>
        </Link>
        <Link href="/newblades">
          <p className={`section-tab ${activateNewBlades}`}>Nye Blad</p>
        </Link>
        <Link href="/bladoversiktvisuell">
          <p className={`section-tab ${activate4}`}>Visuell oversikt</p>
        </Link>
        <h4 className="section-header">Segmenter og kniver</h4>
        <Link href="/verktoyoversikt">
          <p className={`section-tab ${activate7}`}>Oversikt</p>
        </Link>
        <Link href="/datesearchtools">
          <p className={`section-tab ${activate9}`}>Datosøk</p>
        </Link>

        <Link href="/redigersegmenter">
          <p className={`section-tab ${activate10}`}>Slett/legg til</p>
        </Link>
        <Link href="/redigertools">
          <p className={`section-tab ${activate11}`}>Rediger input</p>
        </Link>
        <Link href="/segmentoversiktvisuell">
          <p className={`section-tab ${activate5}`}>Bilder Segmenter</p>
        </Link>

        <Link href="/knivoversiktvisuell">
          <p className={`section-tab ${activate6}`}>Bilder Kniver og Motstål</p>
        </Link>

        {user && user.sub === process.env.USER_SUB && (
          <>
            <h4 className="section-header">Vollmer CHC 1300</h4>
            <Link href="/slipemaskinhistorikk">
              <p className={`section-tab ${activate12}`}>Historikk</p>
            </Link>
          </>
        )}

        {/* 
        <h4 className="section-header">Support</h4>
        <Link href="">
          <p className={`section-tab ${activateSnippets}`}>Helpdesk</p>
        </Link> */}
      </div>
      <style jsx>{`
        .container {
          grid-area: sideBar;
          background: var(--primary);
          padding: 1rem;
          width: 15rem;
          transform: ${isMobile && "translateX(-15rem)"};
          z-index: 1500;
        }
        .container-open {
          animation: openContainer 0.8s forwards;
          position: absolute;
          min-height: 100vh;
        }
        .container-close {
          animation: close 0.8s forwards;
          min-height: 100vh;
          position: absolute;
        }
        .menu-invisible-container {
          position: absolute;
          width: 100vw;
          height: 100vh;
        }
        .input {
          background: transparent;
          outline: none;
          border: 1px solid grey;
          padding: 0.5rem;
          border-radius: 5px;
          font-size: 1.2rem;
          width: 12rem;
          font-weight: 100;
          color: #dadada;
        }
        .logo {
          color: ${user ? `var(--text)` : "var(--secondary)"};

          font-size: 3rem;
          margin-bottom: 2rem;
        }
        .logo:hover {
          cursor: pointer;
        }
        .menu-icon-container {
          position: fixed;
          right: 2rem;
          top: 2rem;
          background: var(--middle);
          width: 3rem;
          height: 3rem;
          z-index: 1500;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }
        .section-header {
          color: var(--middle);
          margin: 1rem 0 1.5rem 0;
          font-weight: bold;
        }
        .section-tab {
          color: var(--text2);
          margin-left: 1rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
        }
        .section-tab:hover {
          cursor: pointer;
        }
        .tab-active::before {
          content: "🁢 ";
          position: absolute;
          left: 0;
          background: var(--middle);
          color: var(--middle);
          width: 15rem;
          height: 3rem;
          opacity: 0.4;
        }

        @keyframes openContainer {
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes close {
          0% {
            transform: translateX(0rem);
          }
          100% {
            transform: translateX(-15rem);
          }
        }
      `}</style>
    </>
  );
};
export default SideBar;
