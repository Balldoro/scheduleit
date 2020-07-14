import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  color: #272727;
  margin: 0.5rem 0;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 40%;
    height: 2px;
    background-color: #2fe797;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const OrDecor = styled.div`
  width: 45px;
  display: flex;
  margin: 1rem auto;
  height: 45px;
  border: 1px solid #2fe797;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;

export const Input = styled.input`
  background-color: #f9f9f9;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px 12px;
  margin: 0.2rem 0;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: #2fe797;
  border: none;
  color: #272727;
  text-align: center;
  min-width: 190px;
  width: 50%;
  padding: 12px 0;
  margin: 0.5rem auto;
  font-size: 1rem;
  cursor: pointer;
`;
