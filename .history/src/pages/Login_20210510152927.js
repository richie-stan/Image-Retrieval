import React from "react";
import { LoginContainer, LoginButton } from "../components/LoginElements";
import { SiUnsplash } from "react-icons/si";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginContainer>
      <h1>Image Retrieval API</h1>
      <LoginButton>
        <a href="https://unsplash.com/oauth/authorize?client_id=fWYDSnlsGYFmDtJGJAEsJJKvmnp5YNrLsvhU7SdiY1Y/redirect_uri=http://localhost:3000">
          Home
        </a>
        <SiUnsplash style={{ paddingLeft: "5px" }} />
      </LoginButton>
    </LoginContainer>
  );
}

export default Login;
