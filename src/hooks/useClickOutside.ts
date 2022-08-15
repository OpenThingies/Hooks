import React, { createRef, useCallback, useEffect } from "react";

export default function useClickOutside<T extends HTMLElement = HTMLDivElement>(func: Function): React.RefObject<T> {

    const ref = createRef<T>();

    const handleOnClick = useCallback((e: MouseEvent) => {
        if(ref.current && !ref.current.contains(e.target as Node)) {
            func();
        }
    }, [ref]);

    useEffect(() => {

        window.addEventListener('click', handleOnClick);

        return () => {
            window.removeEventListener('click', handleOnClick);
        };
        
    }, [ref]);

    return ref;
}