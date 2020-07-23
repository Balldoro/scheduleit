import React, { useState } from "react";
import {
  ActionButton,
  NameContainer,
  NameIcon,
} from "../Navigation/NavigationStyles";
import { NewProjectButton, NewProjectIcon } from "./ProjectsStyles";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";
import AddProjectPopUp from "../PopUps/AddProjectPopUp";
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects({ userProjects, createProject, deleteProject, uid }) {
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
                uid={uid}
                deleteProject={deleteProject}
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
          uid={uid}
          closePopUp={setAddProjectIsOpen}
        />
      )}
    </>
  );
}

export default Projects;
