import styled from "styled-components";
import { FaProjectDiagram } from "react-icons/fa";

export const ActionButton = styled.button`
  border: none;
  border-bottom: 1px solid #f3f3f3;
  font-size: 1.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: 15px 0;
  cursor: pointer;
  color: #484848;
`;

export const ActionLink = styled(ActionButton)`
  justify-content: flex-start;
  &.active {
    color: #272727;
    font-weight: 500;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NameIcon = styled(FaProjectDiagram)`
  margin-right: 0.5rem;
  font-size: 1.25rem;
`;
