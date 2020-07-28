import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const NewProjectButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #f3f3f3;
  cursor: pointer;
`;

export const NewProjectIcon = styled(FaPlus)`
  margin-right: 0.5rem;
  width: 18px;
  height: 18px;
`;
