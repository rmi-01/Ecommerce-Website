import React, { useState } from "react";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import { auth, CreateUserProfileDocument } from "../../firebase/utils";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await CreateUserProfileDocument(user, { displayName });
      clearForm();
    } catch (err) {
      console.log("Error occured while creating user", err.message);
    }
  };
  const clearForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="sign-up">
      <h1 className="title">I do not have a account</h1>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          required
          value={displayName}
          handleChange={(e) => setDisplayName(e.target.value)}
          label="name"
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
          label="confirm password"
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
