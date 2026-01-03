import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from './styles.module.css';
import { setStyleApp } from "../../config/store/slices/systemSlice";

export const ThemeToggle = ({ themes = [] }) => {
    const dispatch = useDispatch();
    const { styleApp } = useSelector(state => state.system);

    const handleChange = (e) => {
        dispatch(setStyleApp(e.target.value));
    };

    return (
        <div className={Styles["ac-theme-toggle"]}>
            <div className={Styles["ac-select-wrapper"]}>
                <select id="theme-select" value={styleApp} onChange={handleChange} className={Styles["ac-select"]}>
                    {
                        themes?.map((element, index) => (
                            <option key={index} className="ac-select-option " value={element.clave}>{element.tema}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};