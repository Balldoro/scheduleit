import React from "react";
import { Title, Input, Form, Label, Button } from "../AuthStyles";

function SignUp() {
  return (
    <section>
      <Title>Sign Up</Title>
      <Form>
        <div>
          <Label>
            First Name
            <Input type="text" />
          </Label>
          <Label>
            Last Name
            <Input type="text" />
          </Label>
        </div>
        <Label>
          E-mail
          <Input type="email" />
        </Label>
        <Label>
          Password
          <Input type="password" />
        </Label>
        <Button type="submit">Create an account</Button>
      </Form>
    </section>
  );
}

export default SignUp;
