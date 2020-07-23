import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ProjectSign = styled.div`
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color};
`;

export const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  min-height: 45px;
  border-bottom: 1px solid #f3f3f3;
  color: #484848;
  font-size: 0.95rem;
`;

export const ProjectLink = styled(NavLink)`
  display: flex;
  cursor: pointer;
  &.active {
    color: #272727;
    font-weight: 500;
  }
`;

export const DeleteProjectButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
