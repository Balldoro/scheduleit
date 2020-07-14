import React from "react";

function SignUp() {
  return (
    <section>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>
            First Name
            <input type="text" />
          </label>
          <label>
            Last Name
            <input type="text" />
          </label>
        </div>
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

export default SignUp;
