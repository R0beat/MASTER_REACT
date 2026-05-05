import React, { useState } from "react";
import Styles from "./styles.module.css";

export const ToggleButton = ({ name = "toggle" }) => {
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        setActive(e.target.checked);
    };

    return (
        <div className={Styles.switch}>
            <input
                type="checkbox"
                className={Styles.btnSwitch}
                name={name}
                id={name}
                checked={active}
                onChange={handleChange}
            />
            <label htmlFor={name} className={Styles.lblSwitch}></label>
        </div>
    );
};
