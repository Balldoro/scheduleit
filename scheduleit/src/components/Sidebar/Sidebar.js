import React from "react";
import UserPanel from "./UserPanel/UserPanel";
import { Container } from "./SidebarStyles";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";

function Sidebar({ user, logOut }) {
  return (
    <Container>
      <UserPanel user={user} logOut={logOut} />
    </Container>
  );
}

export default connect(
  (state) => ({ user: state.auth.user }),
  (dispatch) => ({ logOut: () => dispatch(logoutUser()) })
)(Sidebar);
