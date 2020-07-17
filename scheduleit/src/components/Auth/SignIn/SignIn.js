import React, { useState } from "react";
import { Title, Form, Label, Input, Button } from "../AuthStyles";

function SignIn({ loginUser, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <section>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <Label>
          E-mail
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </section>
  );
}

export default SignIn;
