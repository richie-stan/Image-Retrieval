import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import querystring from "query-string";

function Test() {
  const [images, setImages] = useState();
  const queryString = require("query-string");

  function _filter() {
    var url = window.location;
    alert(url);
    alert(url.toString().split("code"));
  }

  let unsplash = new Unsplash({
    accessKey: "fWYDSnlsGYFmDtJGJAEsJJKvmnp5YNrLsvhU7SdiY1Y",
    applicationId: "215450",
    secret: "2sT3azysUTR7hWkdoVG7SijbiJECQnwd3h0BtZcQghk",
    callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
  });

  let authenticationUrl = unsplash.auth.getAuthenticationUrl(["public"]);

  window.location.assign(authenticationUrl);

  unsplash.authconst
    .userAuthentication()
    .then(toJson)
    .then((json) => {
      unsplash.auth.setBearerToken(json.access_token);
    });

  unsplash.search
    .photos("cars")
    .then(toJson)
    .then((json) => {
      if (json.results.length === 0) {
        console.log("error");
      } else {
        setImages(json.results);
      }
    });

  return <div>Test {images}</div>;
}

export default Test;
