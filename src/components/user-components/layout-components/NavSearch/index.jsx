import { useState, useRef, useEffect } from "react";
import DropdownCard from "./DropdownCard";
import InputSearch from "./InputSearch";

const NavSearch = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const refDropdown = useRef(null);

  const handleInputFocus = (e) => {
    e.stopPropagation();
    setIsFocus(true);
    setIsClick(true);
  };

  const handleInputBlur = (e) => {
    e.stopPropagation();
    // setIsFocus(false);
  };
  const handleDropdownClick = (e) => {
    if (refDropdown.current && !refDropdown.current.contains(e.target)) {
      // Xử lý khi click ra ngoài DropdownCard
      setIsClick(false);
    } else {
      setIsClick(true);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleDropdownClick);

    return () => {
      document.removeEventListener("mousedown", handleDropdownClick);
    };
  }, []);

  return (
    <>
      <InputSearch
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        isFocus={isFocus}
      />
      <DropdownCard
        ref={refDropdown}
        handleDropdownClick={handleDropdownClick}
        isClick={isClick}
      />
    </>
  );
};

export default NavSearch;
