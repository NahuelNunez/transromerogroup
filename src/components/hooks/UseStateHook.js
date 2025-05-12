import { useState } from "react";


export const UseStateHook = () => {

    const [Open, setOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };







    return {
        setOpen,
        Open,
        toggleMenu,
        isMenuOpen,
        setIsMenuOpen
    }
}
