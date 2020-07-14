import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { OrDecor, Container } from "./AuthStyles";

function Auth() {
  return (
    <main>
      <Container>
        <SignIn />
        <OrDecor>OR</OrDecor>
        <SignUp />
      </Container>
    </main>
  );
}

export default Auth;
