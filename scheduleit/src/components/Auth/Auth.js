import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { OrDecor, Container, Image, Main } from "./AuthStyles";
import photo from "./note_draw.svg";
import { connect } from "react-redux";
import { createUser } from "../../store/actions/authActions";

function Auth({ createUser }) {
  return (
    <Main>
      <Container>
        <SignIn />
        <OrDecor>OR</OrDecor>
        <SignUp createUser={createUser} />
      </Container>
      <Image src={photo} />
    </Main>
  );
}

export default connect(null, (dispatch) => ({
  createUser: (userData) => dispatch(createUser(userData)),
}))(Auth);
