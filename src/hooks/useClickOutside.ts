import React, { createRef, useCallback, useEffect } from "react";

/**
 * Executes the callback function when the user clicks out side of the ref element
 * @param func the callback to execute when an user clicks outside the ref element
 * @returns the ref to apply to the element
 */
export default function useClickOutside<T extends HTMLElement = HTMLDivElement>(
    func: () => any
): React.RefObject<T> {
    const ref = createRef<T>();

    const handleOnClick = useCallback(
        (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                func();
            }
        },
        [ref, func]
    );

    useEffect(() => {
        window.addEventListener("click", handleOnClick);

        return () => {
            window.removeEventListener("click", handleOnClick);
        };
    }, [ref, handleOnClick]);

    return ref;
}
