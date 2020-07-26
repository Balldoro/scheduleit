import React, { useState } from "react";
import UserPanel from "./UserPanel/UserPanel";
import { Container, CloseButton } from "./SidebarStyles";
import Navigation from "./Navigation/Navigation";
import { connect } from "react-redux";
import {
  createProject,
  deleteProject,
} from "../../store/actions/projectsActions";
import { logoutUser } from "../../store/actions/authActions";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Sidebar({
  userData: { info, projects },
  logOut,
  createProject,
  deleteProject,
}) {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 800);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) {
      setIsOpen(true);
    }
  });
  return (
    <>
      <CloseButton active={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </CloseButton>
      {isOpen && (
        <Container>
          <UserPanel userInfo={info} logOut={logOut} />
          <Navigation
            userProjects={projects}
            createProject={createProject}
            deleteProject={deleteProject}
          />
        </Container>
      )}
    </>
  );
}

export default connect(
  (state) => ({ userData: state.user }),
  (dispatch, ownProps) => ({
    logOut: () => dispatch(logoutUser()),
    createProject: (color, name) =>
      dispatch(createProject(ownProps.uid, color, name)),
    deleteProject: (projectID) =>
      dispatch(deleteProject(ownProps.uid, projectID)),
  })
)(Sidebar);
