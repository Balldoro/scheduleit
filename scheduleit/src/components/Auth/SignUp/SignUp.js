import React, { useState } from "react";
import { Title, Input, Form, Label, Button } from "../AuthStyles";

function SignUp({ createUser, errorMessage }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userData);
  };

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <Label>
          First Name
          <Input
            type="text"
            name="firstName"
            value={userData.firstName}
            required
            onChange={handleOnChange}
          />
        </Label>
        <Label>
          Last Name
          <Input
            type="text"
            name="lastName"
            value={userData.lastName}
            required
            onChange={handleOnChange}
          />
        </Label>
        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            value={userData.email}
            required
            onChange={handleOnChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={userData.password}
            required
            onChange={handleOnChange}
          />
        </Label>
        <Button type="submit">Create an account</Button>
      </Form>
    </section>
  );
}

export default SignUp;
