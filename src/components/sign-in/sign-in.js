import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/utils";

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
      <h2 className="title">I already have an account</h2>
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
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign in with google
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
