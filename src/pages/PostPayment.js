import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CheckIcon from "@material-ui/icons/Check";
import { BooksContext } from "../context/BooksContextProvider";

const PostPayment = () => {
  const { clearCart } = useContext(BooksContext);
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="post-payment">
      <h2>
        Your payment was successful <CheckIcon style={{ fontSize: "35px" }} />
      </h2>
      <Link to="/">
        <button>
          Go back to the books <SearchIcon style={{ fontSize: "18px" }} />
        </button>
      </Link>
    </div>
  );
};

export default React.memo(PostPayment);
