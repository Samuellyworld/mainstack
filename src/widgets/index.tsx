// import relevant module
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { HomepageContainer } from "./index.style";
import { useState } from "react";


// JSX Component
const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openFunction = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <HomepageContainer>
          <img
        src="/svgs/Menu.svg"
        alt="menu"
        height={30}
        width={30}
        className="menu-icon"
        onClick={openFunction}
        style={{
          display: isOpen ? "none" : "block",
        }}
      />

      <div
        className="side-bar"
        style={{
          left: isOpen ? 0 : "-100%",
        }}
      >

      <img
        src="/svgs/close.svg"
        alt="close"
        height={30}
        width={30}
        className="menu-icon-close"
        onClick={openFunction}
        style={{
          display: isOpen ? "block" : "none",
        }}
      />
        <Sidebar />
      </div>
      <Main />
    </HomepageContainer>
  );
};

export default Homepage;
