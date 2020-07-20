import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Dashboard({ user }) {
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Sidebar />
      <main></main>
    </>
  );
}
export default connect((state) => ({ user: state.auth.user }))(Dashboard);
