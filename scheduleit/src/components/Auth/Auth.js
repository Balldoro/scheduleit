import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { OrDecor, Container, Image, Main } from "./AuthStyles";
import photo from "./note_draw.svg";
import { connect } from "react-redux";
import { createUser, loginUser } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

function Auth({ user, errors, createUser, loginUser }) {
  if (user) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Main>
      <Container>
        <SignIn loginUser={loginUser} errorMessage={errors.signIn} />
        <OrDecor>OR</OrDecor>
        <SignUp createUser={createUser} errorMessage={errors.signUp} />
      </Container>
      <Image src={photo} />
    </Main>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    errors: state.auth.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userData) => dispatch(createUser(userData)),
    loginUser: (email, password) => dispatch(loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
