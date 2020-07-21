import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  ActionButton,
  NameContainer,
  NameIcon,
  ProjectSign,
  NewProjectButton,
  NewProjectIcon,
  ProjectLink,
} from "./NavigationStyles";

function Navigation({ userProjects }) {
  const [openTab, setOpenTab] = useState("");
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
              <li key={project.name}>
                <ProjectLink to={`/dashboard/${project.name.toLowerCase()}`}>
                  <ProjectSign color={project.color} />
                  {project.name}
                </ProjectLink>
              </li>
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

export default Navigation;
