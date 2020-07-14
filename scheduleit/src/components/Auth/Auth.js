import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { OrDecor, Container, Image, Main } from "./AuthStyles";
import photo from "./note_draw.svg";

function Auth() {
  return (
    <Main>
      <Container>
        <SignIn />
        <OrDecor>OR</OrDecor>
        <SignUp />
      </Container>
      <Image src={photo} />
    </Main>
  );
}

export default Auth;
