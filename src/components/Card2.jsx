import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card2 = ({ children }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`w-full h-full rounded-md relative pr-1 pt-10 border-2   ${darkMode ? "bg-gray-800 border-gray-800": " bg-white border-neutral-200" } `}>
            {children}
        </div>
    )
}

export default Card2;