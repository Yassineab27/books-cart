import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Books from "./books/Books";
import BookDetail from "./books/BookDetail";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import "../App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/books/:book_id" component={BookDetail} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
