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
  uid,
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
            uid={uid}
          />
        </Container>
      )}
    </>
  );
}

export default connect(
  (state) => ({ uid: state.auth.user, userData: state.user }),
  (dispatch) => ({
    logOut: () => dispatch(logoutUser()),
    createProject: (userID, color, name) =>
      dispatch(createProject(userID, color, name)),
    deleteProject: (userID, projectID) =>
      dispatch(deleteProject(userID, projectID)),
  })
)(Sidebar);
