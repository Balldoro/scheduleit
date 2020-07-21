import React from "react";
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

function Projects({ userProjects, deleteProject, uid, openTab, setOpenTab }) {
  return (
    <>
      <ActionButton
        onClick={() => {
          openTab !== "projects" ? setOpenTab("projects") : setOpenTab("");
        }}
      >
        <NameContainer>
          <NameIcon /> Projects
        </NameContainer>
        {openTab === "projects" ? <FaChevronUp /> : <FaChevronDown />}
      </ActionButton>
      {openTab === "projects" && (
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
