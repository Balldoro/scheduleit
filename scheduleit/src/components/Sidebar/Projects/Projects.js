import React, { useState } from "react";
import {
  ActionButton,
  NameContainer,
  NameIcon,
} from "../Navigation/NavigationStyles";
import { NewProjectButton, NewProjectIcon } from "./ProjectsStyles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AddProjectPopUp from "../../PopUps/AddProjectPopUp";
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects({ userProjects, createProject, deleteProject }) {
  const [isOpen, setIsOpen] = useState(false);
  const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);
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
              <ProjectItem
                data={project}
                deleteProject={deleteProject}
                key={project.id}
              />
            ))}
          <li>
            <NewProjectButton
              onClick={() => setAddProjectIsOpen(!addProjectIsOpen)}
            >
              <NewProjectIcon />
              Add new Project
            </NewProjectButton>
          </li>
        </ul>
      )}
      {addProjectIsOpen && (
        <AddProjectPopUp
          createProject={createProject}
          closePopUp={setAddProjectIsOpen}
        />
      )}
    </>
  );
}

export default Projects;
