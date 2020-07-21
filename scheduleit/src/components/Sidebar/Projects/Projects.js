import React, { useState } from "react";
import {
  ActionButton,
  NameContainer,
  NameIcon,
} from "../Navigation/NavigationStyles";
import {
  ProjectSign,
  NewProjectButton,
  NewProjectIcon,
  ProjectLink,
  ProjectItem,
  DeleteProjectButton,
} from "./ProjectsStyles";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";

function Projects({ userProjects, deleteProject, uid }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ActionButton onClick={() => setIsOpen(!isOpen)}>
        <NameContainer>
          <NameIcon /> Projects
        </NameContainer>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </ActionButton>
      {isOpen && (
        <ul>
          {userProjects &&
            userProjects.map((project) => (
              <ProjectItem key={project.name}>
                <ProjectLink to={`/dashboard/${project.name.toLowerCase()}`}>
                  <ProjectSign color={project.color} />
                  {project.name}
                </ProjectLink>
                <DeleteProjectButton
                  onClick={() => deleteProject(uid, project.id)}
                >
                  <FaTrash />
                </DeleteProjectButton>
              </ProjectItem>
            ))}
          <li>
            <NewProjectButton>
              <NewProjectIcon />
              Add new Project
            </NewProjectButton>
          </li>
        </ul>
      )}
    </>
  );
}

export default Projects;
