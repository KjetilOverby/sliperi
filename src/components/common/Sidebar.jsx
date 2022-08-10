import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMenuSharp } from "react-icons/io5";
import LoginButton from "../../components/auth/LoginButton";
import LogoutButton from "../../components/auth/LogoutButton";
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
  const [activateSnippets, setActivateSnippets] = useState();
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
    } else if (router.pathname === "/#") {
      setActivate4("tab-active");
    } else if (router.pathname === "/#") {
      setActivate5("tab-active");
    } else if (router.pathname === "/#") {
      setActivateSnippets("tab-active");
    } else if (router.pathname === "/#") {
      setActivateAnimate("tab-active");
    } else if (router.pathname === "/#") {
      setActivateHeader("tab-active");
    } else if (router.pathname === "/#") {
      setActivateFooter("tab-active");
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
        <h4 className="section-header">Linck og trimmerblad</h4>
        <Link href="/search">
          <p className={`section-tab ${activateSearch}`}>Søk</p>
        </Link>
        <Link href="/oversikt">
          <p className={`section-tab ${activateOversikt}`}>Oversikt</p>
        </Link>
        <Link href="/newblades">
          <p className={`section-tab ${activateNewBlades}`}>Nye Blad</p>
        </Link>
        {/*  <h4 className="section-header">Trimmerblad</h4>
        <Link href="/">
          <p className={`section-tab ${activate5}`}>Søk</p>
        </Link>
        <Link href="/">
          <p className={`section-tab ${activateHeader}`}>Oversikt</p>
        </Link>{" "}
        <Link href="/">
          <p className={`section-tab ${activateFooter}`}>Nye blad</p>
        </Link>
        <h4 className="section-header">Color</h4>
        <Link href="/">
          <p className={`section-tab ${activateAnimate}`}>Green</p>
        </Link>
        <h4 className="section-header">Support</h4>
        <Link href="">
          <p className={`section-tab ${activateSnippets}`}>Helpdesk</p>
        </Link> */}
      </div>
      <style jsx>{`
        .container {
          grid-area: sideBar;
          background: #333;
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
          color: ${user ? `${Colors.login}` : "indianred"};

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
          background: ${Colors.login};
          width: 3rem;
          height: 3rem;
          z-index: 1500;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }
        .section-header {
          color: grey;
          margin: 1rem 0;
          font-weight: bold;
        }
        .section-tab {
          color: white;
          margin-left: 1rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          font-size: 0.9rem;
        }
        .section-tab:hover {
          cursor: pointer;
        }
        .tab-active::before {
          content: "🁢 ";
          position: absolute;
          left: 0;
          background: ${Colors.login};
          color: ${Colors.login};
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
