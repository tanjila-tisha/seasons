import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
  state = { lati: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lati: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMsg: err.message });
      }
    );
  }

  displayMsg = () => {
    const { errorMsg, lati } = this.state;
    if (errorMsg && !lati) {
      return <div> Error Message: {errorMsg} </div>;
    }
    if (!errorMsg && lati) {
      return <SeasonDisplay latitude={lati} />;
    }
    return <Loader msg="Please accept the location request." />;
  };

  render() {
    return <div>{this.displayMsg()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
