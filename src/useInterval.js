// Custom Hook by Dan Abrahmov
import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Setup the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
