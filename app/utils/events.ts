import { MutableRefObject, useEffect } from "react";

export function clickOutside(ref: any, handler: Function): void {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function clickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", clickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [ref]);
}
