import React from "react";
import {
  ItemContainer,
  ProjectLink,
  ProjectSign,
  DeleteProjectButton,
} from "./ProjectItemStyles";
import { FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function ProjectItem({ data: { name, color, id }, deleteProject }) {
  const path = `/dashboard/${name.toLowerCase()}`;
  const history = useHistory();

  const handleDeleteProject = () => {
    deleteProject(id);
    if (history.location.pathname === path) {
      history.replace("/dashboard");
    }
  };

  return (
    <ItemContainer>
      <ProjectLink to={path}>
        <ProjectSign color={color} />
        {name}
      </ProjectLink>
      <DeleteProjectButton onClick={handleDeleteProject}>
        <FaTrash />
      </DeleteProjectButton>
    </ItemContainer>
  );
}

export default ProjectItem;
