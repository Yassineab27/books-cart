import React from "react";
import ReactDOM from "react-dom";

import { BooksContextProvider } from "./context/BooksContextProvider";
import App from "./components/App";

ReactDOM.render(
  <BooksContextProvider>
    <App />
  </BooksContextProvider>,
  document.getElementById("root")
);
