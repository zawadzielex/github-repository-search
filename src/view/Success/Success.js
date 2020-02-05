import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import getUrlParams from "utils/getUrlParams";

function Success({ login, logged, isLoaded }) {
  useEffect(() => {
    const code = getUrlParams(window.location.search, "code");
    login(code);
  }, [login]);

  return (
    <div>
      {isLoaded ? logged ? <Redirect to="/search" /> : <Redirect to="/" /> : ""}
    </div>
  );
}

export default Success;
