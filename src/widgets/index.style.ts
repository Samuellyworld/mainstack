// import styled from styled-components
import styled from "styled-components";

// home page container styles
export const HomepageContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;

  position: relative;

  @media screen and (max-width: 1072px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  @media screen and (max-width: 961px) {
    padding: 2rem 0.5rem;
  }

  @media screen and (max-width: 640px) {
    padding: 1.5rem 0;
  }
  .side-bar {
    background-color: white;
    transition: 0.2s all ease-out;
    z-index: 2;
    position : sticky;
    top: 0;
    
    @media screen and (max-width: 1072px) {
      position: fixed;
      left: 0;
      top: 0;
    }
  }

  .menu-icon {
    display: none;
    opacity: 0;
    position: fixed;
    top: 0.5rem;
    left: 1rem;
    z-index: 20000;
    cursor: pointer;

    @media screen and (max-width: 1072px) {
      display: block;
      opacity: 1;
    }
  }

  .menu-icon-close {
    display: none;
    opacity: 0;
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    z-index: 20000;
    cursor: pointer;

    @media screen and (max-width: 1072px) {
      display: block;
      opacity: 1;
    }
  }
`;
