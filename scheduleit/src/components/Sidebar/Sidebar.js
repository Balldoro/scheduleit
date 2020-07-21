import React from "react";
import UserPanel from "./UserPanel/UserPanel";
import { Container } from "./SidebarStyles";
import Navigation from "./Navigation/Navigation";
import { connect } from "react-redux";
import {
  createProject,
  deleteProject,
} from "../../store/actions/projectsActions";
import { logoutUser } from "../../store/actions/authActions";

function Sidebar({
  uid,
  userData: { info, projects },
  logOut,
  createProject,
  deleteProject,
}) {
  return (
    <Container>
      <UserPanel userInfo={info} logOut={logOut} />
      <Navigation
        userProjects={projects}
        createProject={createProject}
        deleteProject={deleteProject}
        uid={uid}
      />
    </Container>
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
