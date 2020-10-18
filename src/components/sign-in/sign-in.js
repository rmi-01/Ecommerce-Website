import React, { useState } from "react";
import FormInput from "../form-input/form-input";
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
        <FormInput
          name="email"
          type="email"
          required
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          required
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label="password"
        />
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
