import styled from "styled-components";
import { FaProjectDiagram, FaPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

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
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NameIcon = styled(FaProjectDiagram)`
  margin-right: 0.5rem;
  font-size: 1.25rem;
`;

export const ProjectSign = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color};
`;

export const ProjectLink = styled(NavLink)`
  padding: 12px;
  display: flex;
  border-bottom: 1px solid #f3f3f3;
  font-size: 0.95rem;
  color: #484848;
  cursor: pointer;
  &.active {
    color: #272727;
    font-weight: 500;
  }
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
