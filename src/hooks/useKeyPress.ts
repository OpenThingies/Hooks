import { useEffect } from "react";

/**
 * Hooks a global keyress up to a callback function
 * @param func The callback to execute on keypress
 */
export default function useKeyPress(func: (e: KeyboardEvent) => void) {
    useEffect(() => {
        document.addEventListener("keydown", func);
        return () => document.removeEventListener("keydown", func);
    }, [func]);
}
