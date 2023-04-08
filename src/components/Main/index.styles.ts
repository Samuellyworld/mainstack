// import styled from styled-components
import styled from "styled-components";

// main container styles
export const MainContainer = styled.div`
  max-width: 100%;
  padding: 1rem 3rem;

  @media screen and (max-width: 881px) {
    padding: 1rem 1.5rem;
  }

  .graph {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// main header text styles
export const MainHeaderText = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

// main header styles
export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const MainHeaderGoodText = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
`;
export const MainHeaderCheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: 400;
  color: #56616b;
`;

export const MainHeaderCheckText = styled.span``;
export const MainHeaderAnalyticText = styled.span`
  color: #ff5403;
  cursor: pointer;
`;
export const MainHeaderBottom = styled.div`
  padding: 0.5rem 0;

  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 673px) {
    gap: 0.5rem;
  }
`;

export const MainHeaderDays = styled.button`
  background-color: transparent;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid
    hsla(208.5714285714286, 10.88082901554404%, 37.84313725490196%, 0.177);
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 400;
  color: #56616b;
  cursor: pointer;
  transition: 0.2s all ease-out;

  &:hover {
    border: 1px solid #ff5403;
    color: #ff5403;
    background-color: hsla(
      19.047619047619047,
      100%,
      50.588235294117645%,
      0.163
    );
  }
`;
