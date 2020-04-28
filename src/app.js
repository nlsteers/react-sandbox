//import React, { useState, lazy, Suspense } from "react";
import React, { useState } from "react";
import { Router } from "@reach/router";
import Details from "./components/details";
import SearchParams from "./components/searchParams";
import ThemeContext from "./components/themeContext";
import ThemeSelect from "./components/themeSelect";
import NavBar from "./components/navBar";

//const Details = lazy(() => import("./components/details"));

const App = () => {
  const theme = useState("peru");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <ThemeSelect />
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

//<Suspense fallback={<p>loading route...</p>}>
//   <Router>
//     <SearchParams path="/" />
//     <Details path="/details/:id" />
//   </Router>
// </Suspense>
