import React from "react";
import { LoginContainer, LoginButton } from "../components/LoginElements";
import { SiUnsplash } from "react-icons/si";

function Login() {
  return (
    <LoginContainer>
      <h1>Image Retrieval API</h1>
      <LoginButton>
        Login
        <SiUnsplash style={{ paddingLeft: "50px" }} />
      </LoginButton>
    </LoginContainer>
  );
}

export default Login;
