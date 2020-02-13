import { useState } from "react";

const useToggler = () => {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn(prevState => !prevState);
  };

  return [on, handleToggle];
};

export default useToggler;
