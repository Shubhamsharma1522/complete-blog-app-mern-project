import React from "react";
import LoaderCss from "../Assets/Loader.Module.css";
function Loader() {
  return (
    <div id={LoaderCss.preloader}>
      <div id={LoaderCss.loader}></div>
    </div>
  );
}

export default Loader;
