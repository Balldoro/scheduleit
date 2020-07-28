import React from "react";
import Projects from "../Projects/Projects";
import { ActionLink, NameIcon } from "./NavigationStyles";
import { FaColumns, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navigation({ userProjects, createProject, deleteProject }) {
  return (
    <ul>
      <li>
        <ActionLink as={NavLink} to="/dashboard" exact>
          <NameIcon as={FaColumns} />
          Dashboard
        </ActionLink>
      </li>
      <li>
        <ActionLink as={NavLink} to="/dashboard/daily" exact>
          <NameIcon as={FaTasks} />
          Daily
        </ActionLink>
      </li>
      <li>
        <Projects
          userProjects={userProjects}
          createProject={createProject}
          deleteProject={deleteProject}
        />
      </li>
    </ul>
  );
}

export default Navigation;
