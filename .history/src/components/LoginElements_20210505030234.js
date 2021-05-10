import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const LoginButton = styled.button`
  margin: 0 1px;
  height: 33px;
  display: flex;
  background-color: #61dafb;
  font-size: 0.5rem;
  align-items: center;
  color: #000;
  border-radius: 3px;
  border: none;
  transition: 0.3s;
  border: 1px solid #000;
  outline: none;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background: #000;
    color: #61dafb;
    border: 1px solid #61dafb;
  }
`;
