import React, { useState } from "react";
import Projects from "../Projects/Projects";
import { ActionLink } from "./NavigationStyles";
import { FaColumns } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navigation({ userProjects, createProject, uid, deleteProject }) {
  const [openTab, setOpenTab] = useState("");
  return (
    <ul>
      <li>
        <ActionLink as={NavLink} to="/dashboard" exact>
          <FaColumns style={{ marginRight: "0.5rem" }} />
          Dashboard
        </ActionLink>
      </li>
      <li>
        <Projects
          userProjects={userProjects}
          createProject={createProject}
          uid={uid}
          deleteProject={deleteProject}
          setOpenTab={setOpenTab}
          openTab={openTab}
        />
      </li>
    </ul>
  );
}

export default Navigation;
