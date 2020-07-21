import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const ProjectSign = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color};
`;

export const ProjectItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  height: 45px;
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
