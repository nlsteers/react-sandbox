import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./components/searchParams";
import ThemeContext from "./components/themeContext";
import ThemeSelect from "./components/themeSelect";
import NavBar from "./components/navBar";

const Details = lazy(() => import("./components/details"));

const App = () => {
  const theme = useState("peru");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <ThemeSelect />
        <NavBar />
        <Suspense fallback={<p>loading route...</p>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
