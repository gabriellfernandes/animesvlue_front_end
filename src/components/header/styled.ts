import styled from "styled-components";

export const HeaderConteiner = styled.div`
  background-color: var(--backGroundColor);
  color: var(--colorDropDown);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10%;
  width: 100%;
  height: 6rem;

  @media (max-width: 1200px) {
    padding: 10px 5%;
  }



  @media (max-width: 850px) {
    display: none;
  }

  a:hover {
    color: var(--hoverColor);
  }

  .logo {
    width: 20%;
    height: 80px;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    .logo {
      width: 15%;
      height: 50px;
    }
  }


`;

export const UlHeader = styled.ul`
  margin-left: 0px;
  display: flex;
  gap: 1.7rem;
  text-align: center;

  a {
    color: var(--colorDropDown);
    cursor: pointer;
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 1600px) {
    gap: 1.5rem;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 1450px) {
    gap: 1rem;

    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }
`;

export const InputHeader = styled.form`
  display: flex;
  align-items: center;

  input {
    width: 80%;
    background-color: rgba(0, 0, 0, 0);
    color: white;
  }

  .conteiner-input {
    border: 0.5px solid var(--shadowBox);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.3rem;
  }

  svg {
    font-size: 25px;
    color: white;
    cursor: pointer;

    &:hover {
      color: var(--hoverColor);
    }
  }

  span {
    padding: 10px;
    font-weight: bold;
    font-size: 22px;
    cursor: default;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 1050px) {
    .conteiner-input {
      width: 60%;
      margin-left: 40px;
      padding: 0.2rem;
    }
  }
`;
