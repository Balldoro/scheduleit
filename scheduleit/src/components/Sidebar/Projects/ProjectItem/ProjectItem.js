import React from "react";
import {
  ItemContainer,
  ProjectLink,
  ProjectSign,
  DeleteProjectButton,
} from "./ProjectItemStyles";
import { FaTrash } from "react-icons/fa";

function ProjectItem({ data: { name, color, id }, uid, deleteProject }) {
  const path = `/dashboard/${name.toLowerCase()}`;
  return (
    <ItemContainer key={name}>
      <ProjectLink to={path}>
        <ProjectSign color={color} />
        {name}
      </ProjectLink>
      <DeleteProjectButton onClick={() => deleteProject(uid, id)}>
        <FaTrash />
      </DeleteProjectButton>
    </ItemContainer>
  );
}

export default ProjectItem;
