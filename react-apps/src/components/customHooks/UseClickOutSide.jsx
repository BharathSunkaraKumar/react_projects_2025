import { useEffect } from "react";

const UseClickOutSideHook = (ref, handler) => {
  useEffect(() => {
    const lisener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
      console.log("ref: ", !ref.current);
      console.log("event.target: ", ref.current.contains(event.target));
    };
    document.addEventListener("touchstart", lisener);
    document.addEventListener("mousedown", lisener);
    return () => {
      document.removeEventListener("touchstart", lisener);
      document.removeEventListener("mousedown", lisener);
    };
  }, [ref, handler]);
};

export default UseClickOutSideHook;
