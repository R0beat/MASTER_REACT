import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStyleApp } from "../../config/store/slices/systemSlice.js";
export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const { styleApp } = useSelector(state => state.system);

    return (
        <button
            onClick={() => dispatch(toggleStyleApp())}
            className="toggle-theme-btn"
        >
            {styleApp === "0" ? "Material" : "Gruvbox"}
        </button>
    );
};
