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
  const [isOpen, setIsOpen] = useState(true);
  const [addProjectIsOpen, setAddProjectIsOpen] = useState(false);

  const toggleProjects = () => {
    setIsOpen(!isOpen);
  };
  const toggleAddProject = () => {
    setAddProjectIsOpen(!addProjectIsOpen);
  };
  return (
    <>
      <ActionButton onClick={toggleProjects}>
        <NameContainer>
          <NameIcon /> Projects
        </NameContainer>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </ActionButton>
      {isOpen && (
        <ul>
          {userProjects.length &&
            userProjects.map((project) => (
              <ProjectItem
                data={project}
                deleteProject={deleteProject}
                key={project.id}
              />
            ))}
          <li>
            <NewProjectButton onClick={toggleAddProject}>
              <NewProjectIcon />
              Add new Project
            </NewProjectButton>
          </li>
        </ul>
      )}
      {addProjectIsOpen && (
        <AddProjectPopUp
          createProject={createProject}
          togglePopUp={toggleAddProject}
        />
      )}
    </>
  );
}

export default Projects;
