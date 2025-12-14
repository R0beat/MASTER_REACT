import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from './styles.module.css';
import { setStyleApp } from "../../config/store/slices/systemSlice";

export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const { styleApp } = useSelector(state => state.system);

    const handleChange = (e) => {
        dispatch(setStyleApp(e.target.value));
    };

    return (
        <div className={Styles["ac-theme-toggle"]}>
            <label htmlFor="theme-select" className="ac-label">
                Tema
            </label>

            <div className={Styles["ac-select-wrapper"]}>
                <select id="theme-select" value={styleApp} onChange={handleChange} className={Styles["ac-select"]}>
                    <option className="ac-select-option " value="0">Florencia</option>
                    <option className="ac-select-option " value="1">Roma</option>
                    <option className="ac-select-option " value="2">Venecia</option>
                </select>
            </div>
        </div>
    );
};