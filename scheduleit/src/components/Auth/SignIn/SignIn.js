import React from "react";
import { Title, Form, Label, Input, Button } from "../AuthStyles";

function SignIn() {
  return (
    <section>
      <Title>Sign In</Title>
      <Form>
        <Label>
          E-mail
          <Input type="email" />
        </Label>
        <Label>
          Password
          <Input type="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </section>
  );
}

export default SignIn;
