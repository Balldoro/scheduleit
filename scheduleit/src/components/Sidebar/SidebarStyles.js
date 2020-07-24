import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 240px;
  background-color: #fff;
  border-right: 1px solid #ebebeb;
  min-height: 100vh;
  padding: 1.25rem;
  z-index: 100;
`;

export const CloseButton = styled.button`
  position: absolute;
  font-size: 1.2rem;
  border: none;
  top: 50%;
  left: ${(props) => (props.active ? "240px" : "0")};
  font-size: 1.5rem;
  background-color: #2fe797;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 5px;
  display: flex;
  align-items: center;
  @media (min-width: 800px) {
    display: none;
  }
`;
