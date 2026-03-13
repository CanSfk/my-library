import { useEffect, useState } from "react";

export const useMedia = (width) => {
  const [state, setState] = useState(
    window.matchMedia(`(max-width:${width}px)`).matches,
  );

  const handleState = () => {
    setState(window.matchMedia(`(max-width:${width}px)`).matches);
  };

  useEffect(() => {
    const matches = window.matchMedia(`(max-width:${width}px)`);

    matches.addEventListener("change", handleState);

    return () => {
      matches.removeEventListener("change", handleState);
    };
  }, []);

  return state;
};
