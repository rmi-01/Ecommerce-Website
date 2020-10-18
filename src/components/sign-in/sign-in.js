import React, { useState } from "react";
import "./sign-in.styles.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
