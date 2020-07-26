import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 1.25rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 320px;
`;

export const PopUpHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const PopUpTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 400;
`;

export const Input = styled.input`
  background-color: #f9f9f9;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 6px 12px;
  margin: 0.2rem 0;
  font-size: 1rem;
`;

export const ColorInput = styled.input`
  -webkit-appearance: none;
  padding: 0;
  border: none;
  border-radius: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
    padding: 0;
  }
  &::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 50%;
    padding: 0;
  }
`;

export const Submit = styled.button`
  display: block;
  background-color: #2fe797;
  border: none;
  color: #272727;
  text-align: center;
  min-width: 190px;
  width: 50%;
  padding: 12px 0;
  margin: 1.25rem auto 0 auto;
  font-size: 1rem;
  cursor: pointer;
`;
