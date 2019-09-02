import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./components/searchParams"

const App = () => {
  return (
    <div>
      <h1 className="logo-type">Adopt Me!</h1>
      <SearchParams />
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));