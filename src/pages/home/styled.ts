import styled from "styled-components";

export const DivHomeConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 160px;
`;



export const SubHeaderUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  box-shadow: 0px 2px 3px rgb(101 101 101 / 42%);
  

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 850px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    display: none;
  }

  li {
    height: 3rem;
    width: calc(100% / 24);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--backGroundColor);
    color: var(--textColor);
    font-size: 1.5rem;
    
    &:hover {
      background-color: var(--hoverColor);
    }
  }
`;
