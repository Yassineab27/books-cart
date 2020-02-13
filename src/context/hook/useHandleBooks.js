import { useState } from "react";

const useHandleBooks = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddBook = (bookPassed, str) => {
    const book =
      str === "favorites"
        ? favorites.find(b => b.id === bookPassed.id)
        : cart.find(b => b.id === bookPassed.id);
    if (book) return alert(`This book is already in your ${str} :)`);
    str === "favorites"
      ? setFavorites([...favorites, bookPassed])
      : setCart([...cart, bookPassed]);
    alert(`Book added to ${str} :)`);
  };

  const handleDeleteBook = (bookPassed, str) => {
    str === "favorites"
      ? setFavorites(favorites.filter(b => b.id !== bookPassed.id))
      : setCart(cart.filter(b => b.id !== bookPassed.id));
  };

  return [favorites, cart, handleAddBook, handleDeleteBook];
};

export default useHandleBooks;
