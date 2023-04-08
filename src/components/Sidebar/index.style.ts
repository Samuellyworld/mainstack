// import styled from styled-components
import styled from "styled-components";

// side bar container styles
export const SidebarContainer = styled.div`
  max-width: 100%;
  padding: 2rem 0;
  border-right: 1px solid
    hsla(208.5714285714286, 10.88082901554404%, 37.84313725490196%, 0.148);
  height: 100%;

  @media screen and (max-width: 1070px) {
    width: 15rem;
    padding-top: 3rem;
    height: 100%;
  }
`;

// sidebar logo styles
export const SidebarLogo = styled.img`
  display: block;
  margin-bottom: 2rem;
  padding: 0rem 2.5rem;
`;

// side bar link styles
export const SidebarLink = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  gap: 0.7rem;
  margin-bottom: 1rem;
  align-items: center;
  padding: 0.3rem 2.5rem;
  transition: 0.2s all ease-out;

  cursor: pointer;

  svg {
    stroke: #56616b;
    min-width: 100%;
  }

  span {
    font-size: 0.8rem;
    color: #56616b;
    font-weight: 400;
  }

  .main-svg {
    stroke: #ff5403;
    margin-bottom: 0.3rem;
  }
  .main-span {
    color: #ff5403;
    margin-bottom: 0.3rem;
  }

  &:hover {
    background-image: linear-gradient(to right, #ff5403 2%, #ffffff 2%);

    span {
      color: #ff5403;
    }
    svg {
      stroke: #ff5403;
    }
  }
`;

// side bar header styles
export const SidebarHeader = styled.span`
  display: block;
  color: #56616b;
  font-size: 0.9rem;
  font-weight: 500;
`;

// side bar icon styles
export const SidebarIcon = styled.img`
  display: block;
  height: 1.3rem;
  width: 1.3rem;
  fill: none;
  stroke-width: 3px;
  stroke: #491ec4 !important;

  &:hover {
    stroke: black !important;
  }
`;

// side bar text styles
export const SidebarText = styled.span`
  display: block;
  font-size: 0.7rem;
  padding: 0 2.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

// profile container styles
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  padding: 0.5rem 2.5rem;
  align-items: center;

  margin-top: 5rem;
`;

// profile styles
export const ProfilePic = styled.img``;
export const ProfileName = styled.span`
  color: #56616b;
  font-size: 0.8rem;
`;
