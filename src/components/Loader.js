import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.msg}</div>
    </div>
  );
};

Loader.defaultProps = {
  msg: "Loading...",
};

export default Loader;
