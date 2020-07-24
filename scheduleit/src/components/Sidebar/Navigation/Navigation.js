import React from "react";
import Projects from "../Projects/Projects";
import { ActionLink } from "./NavigationStyles";
import { FaColumns, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navigation({ userProjects, createProject, uid, deleteProject }) {
  return (
    <ul>
      <li>
        <ActionLink as={NavLink} to="/dashboard" exact>
          <FaColumns style={{ marginRight: "0.5rem" }} />
          Dashboard
        </ActionLink>
      </li>
      <li>
        <ActionLink as={NavLink} to="/dashboard/daily" exact>
          <FaTasks style={{ marginRight: "0.5rem" }} />
          Daily
        </ActionLink>
      </li>
      <li>
        <Projects
          userProjects={userProjects}
          createProject={createProject}
          uid={uid}
          deleteProject={deleteProject}
        />
      </li>
    </ul>
  );
}

export default Navigation;
