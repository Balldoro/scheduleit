import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Dashboard({ user }) {
  if (!user) {
    return <Redirect to="/login" />;
  }
  return <div>Dashboard</div>;
}
export default connect((state) => ({ user: state.auth.user }))(Dashboard);
