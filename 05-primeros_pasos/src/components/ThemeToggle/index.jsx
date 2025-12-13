import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStyleApp } from "../../config/store/slices/systemSlice";

export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const { styleApp } = useSelector(state => state.system);

    const handleChange = (e) => {
        dispatch(setStyleApp(e.target.value));
    };

    return (
        <>
            <label htmlFor="theme-select">Tema</label>

            <select
                id="theme-select"
                value={styleApp}
                onChange={handleChange}
            >
                <option value="0">Florencia</option>
                <option value="1">Roma</option>
                <option value="2">Venecia</option>
            </select>
        </>
    );
};