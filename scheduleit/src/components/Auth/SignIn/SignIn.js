import React from "react";

function SignIn() {
  return (
    <section>
      <h2>Sign In</h2>
      <form>
        <label>
          E-mail
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default SignIn;
