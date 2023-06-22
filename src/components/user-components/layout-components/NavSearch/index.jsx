import { useState } from "react";
import DropdownCard from "./DropdownCard";
import InputSearch from "./InputSearch";

const NavSearch = () => {
  const [isFocus, setIsFocus] = useState(true);

  const handleInputFocus = (event) => {
    event.stopPropagation();
    setIsFocus(true);
  };

  const handleInputBlur = (event) => {
    if (!event.relatedTarget) {
      setIsFocus(false);
    }
  };
  return (
    <>
      <InputSearch
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        isFocus={isFocus}
      />
      {isFocus && <DropdownCard />}
    </>
  );
};

export default NavSearch;
