import styled from "styled-components";
export const HomeWrapper = styled.div`
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -10;
`;
export const BgImg = styled.img`
  filter: blur(3px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
`;

export const HomeContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  max-width: 100%;
  text-align: center;
  font-family: "Alegreya Sans", sans-serif;
`;
export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #61dafb;
  text-shadow: 1px 1px 1px #000;
  @media screen and (max-width: 380px) {
    font-size: 1.5rem;
  }
`;
export const SubHeading = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-top: -40px;
  text-shadow: 1px 1px 1px #000;
  font-style: italic;
  @media screen and (max-width: 610px) {
    margin-top: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
  @media screen and (max-width: 416px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  border: none;
  width: 200px;
  height: 30px;
  padding-left: 10px;
  margin-right: 10px;
  /* border-radius: 3px; */
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 416px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
export const ButtonList = styled.div`
  display: flex;
`;
export const Button = styled.button`
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

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 714px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchList = styled.div`
  width: 25%;
  @media (max-width: 714px) {
    width: 100%;
  }
`;
export const FormResults = styled.div`
  width: 70%;
  @media (max-width: 714px) {
    width: 100%;
  }
`;
export const H2 = styled.h2`
  text-decoration: underline;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
`;

export const Img = styled.img`
  margin: 2px;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 3px;
`;
export const QueryItem = styled.button`
  background: none;
  color: #fff;
  outline: none;
  text-shadow: 1px 1px 1px #000;
  border: none;
  font-size: 0.8em;

  &:hover {
    cursor: pointer;
  }
`;
export const TopImages = styled.div`
  display: flex;
  justify-content: center;
`;
export const TopImg = styled.img`
  height: 150px;

  margin: 2px;
  border-radius: 3px;

  @media screen and (max-width: 650px) {
    width: 32%;
    height: auto;
  }
`;
export const UnsplashSearchResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
