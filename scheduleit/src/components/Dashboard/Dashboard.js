import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { getUserInfo } from "../../store/actions/userActions";
import { getUserProjects } from "../../store/actions/userActions";

function Dashboard({ user, getUserInfo, getUserProjects }) {
  useEffect(() => {
    if (user) {
      getUserInfo(user);
      getUserProjects(user);
    }
  }, [user, getUserProjects, getUserInfo]);
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Sidebar uid={user} />
      <main></main>
    </>
  );
}
export default connect(
  (state) => ({ user: state.auth.user }),
  (dispatch) => ({
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    getUserProjects: (id) => dispatch(getUserProjects(id)),
  })
)(Dashboard);
