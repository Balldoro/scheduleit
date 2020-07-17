import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { OrDecor, Container, Image, Main } from "./AuthStyles";
import photo from "./note_draw.svg";
import { connect } from "react-redux";
import { createUser, loginUser } from "../../store/actions/authActions";

function Auth({ createUser, loginUser }) {
  return (
    <Main>
      <Container>
        <SignIn loginUser={loginUser} />
        <OrDecor>OR</OrDecor>
        <SignUp createUser={createUser} />
      </Container>
      <Image src={photo} />
    </Main>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userData) => dispatch(createUser(userData)),
    loginUser: (email, password) => dispatch(loginUser(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
