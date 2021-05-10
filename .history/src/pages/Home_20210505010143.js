import { React, useState, useEffect, useRef } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Loader from "react-loader-spinner";
import LocalContext from "../components/LocalContext";
import Background from "../images/bg6.jpg";
import { BsSearch, BsListUl } from "react-icons/bs";
import CodingAnimation from "../images/gifs/CodingAnimation.gif";
import LoadingAnimation from "../images/gifs/LoadingAnimation.gif";

import {
  HomeContainer,
  Heading,
  SubHeading,
  Form,
  Input,
  Button,
  Content,
  FormResults,
  ButtonList,
  HomeWrapper,
  BgImg,
  H2,
  Img,
  TopImages,
  TopImg,
  UnsplashSearchResults,
} from "../components/HomeElements";

import { BsFillImageFill } from "react-icons/bs";
import SearchResults from "../components/SearchResults";

function Home() {
  const unsplash = new Unsplash({
    accessKey: "fWYDSnlsGYFmDtJGJAEsJJKvmnp5YNrLsvhU7SdiY1Y",
  });

  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [queries, setQueries] = useState([]);
  const [queryListEmpty, setQueryListEmpty] = useState(true);
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(["as", "asd", "asdads", "b"]);
  const [search, setSearch] = useState("");
  let [storageKey, setStorageKey] = useState(0);
  const wrapperRef = useRef(null);

  let [key, setKey] = useState(0);

  var arrayOfValues = Object.values(localStorage).slice(-5);
  // values
  var arrayOfKeys = Object.keys(localStorage);
  //  keys
  var sortedArray = arrayOfKeys.sort();
  let newArr = [];
  for (let x = 0; x < sortedArray.length; x++) {
    // newArr.push(localStorage.key(arrayOfKeys[x]));
    newArr.push(localStorage.getItem(localStorage.key(x)));
  }
  console.log(newArr);

  // for (let x = 0; Object.values(localStorage).length; x++) {
  //   arrayOfValues.push(Object.values(localStorage)[x]);
  // }

  const handleChange = (e) => {
    setValue((prev) => (prev = e.target.value));
  };

  const apiCall = (val) => {
    setLoading(true);
    unsplash.search
      .photos(val)
      .then(toJson)
      .then((json) => {
        if (json.results.length === 0) {
          setShowError(true);
        } else {
          setImages(json.results);
          setLoading(false);
          setShowError(false);
        }
      });
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // var localStoragesKeys = Object.keys(localStorage);
    // console.log(localStoragesKeys[localStoragesKeys.length - 1]);
    // if (localStoragesKeys[localStoragesKeys.length - 1] == storageKey) {
    //   setStorageKey(
    //     (storageKey = localStoragesKeys[localStoragesKeys.length - 1] + 1)
    //   );
    // }
    // console.log(localStorage.getLast());
    localStorage.setItem(new Date().getTime(), value);
    setStorageKey((storageKey = storageKey + 1));
    apiCall(value);
  };

  const addQuery = (e) => {
    e.preventDefault();
    if (value.length !== 0) {
      setKey((key = key + 1));
      let newObj = { value: value, key: key };
      setQueries(queries.concat(newObj));
      setValue("");
      setQueryListEmpty(false);
    }
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <HomeContainer>
        <TopImages>
          <TopImg className="top-image1" src={CodingAnimation} />
          <TopImg
            className="top-image2"
            src="https://media.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif"
          />
          <TopImg className="top-image3" src={LoadingAnimation} />
        </TopImages>
        <Heading className="heading">
          Image Retrieval
          <BsSearch
            id="search-image"
            style={{
              width: "25px",
              height: "30px",
              padding: "2px",
              margin: "5px",
              color: "#fff",
            }}
          />
        </Heading>
        <HomeWrapper>
          <BgImg className="opacity-animation" src={Background} />
        </HomeWrapper>
        <SubHeading className="heading">
          Your image is <span className="react-color">one</span> click away.
        </SubHeading>
        <Content className="opacity-animation">
          <LocalContext.Provider
            value={{
              queries: queries,
              value: value,
              setValue: setValue,
              apiCall: apiCall,
              setQueries: setQueries,
              queryListEmpty: queryListEmpty,
              setQueryListEmpty: setQueryListEmpty,
            }}
          >
            <SearchResults />
          </LocalContext.Provider>
          <FormResults>
            <H2>Search:</H2>
            <Form>
              <div
                ref={wrapperRef}
                className="flex-container flex-column pos-rel"
              >
                <Input
                  onClick={() => setDisplay(!display)}
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Please type your image:"
                />
                {display && (
                  <div className="autoContainer">
                    {/* {console.log(arrayOfValues)} */}
                    {arrayOfValues
                      .filter((name) => name.indexOf(value.toLowerCase()) > -1)
                      .map((value, i) => {
                        return (
                          <div
                            className="option"
                            key={i}
                            onClick={(event) =>
                              setValue(event.target.innerText)
                            }
                          >
                            <span>{value}</span>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
              <ButtonList>
                <Button onClick={handleSubmit}>
                  Search! <BsFillImageFill style={{ padding: "0 5px" }} />
                </Button>
                <Button onClick={addQuery}>
                  Add
                  <BsListUl style={{ padding: "0 5px" }} />
                </Button>
              </ButtonList>
            </Form>
            {/* {localStorage.getItem(value)} */}
            {loading && (
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={2000}
              />
            )}
            {showError && <p>Oops, image doesn't exist.</p>}
            <UnsplashSearchResults>
              {images.map((image) => (
                <Img
                  key={image.id}
                  alt={image.alt_description}
                  src={image.urls.full}
                ></Img>
              ))}
            </UnsplashSearchResults>
          </FormResults>
        </Content>
      </HomeContainer>
    </>
  );
}

export default Home;
