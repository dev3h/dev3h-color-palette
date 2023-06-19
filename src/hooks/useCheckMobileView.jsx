import { useState, useEffect } from "react";

function useCheckMobileView() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    }

    window.addEventListener("resize", handleResize);
    // clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileView;
}

export default useCheckMobileView;
