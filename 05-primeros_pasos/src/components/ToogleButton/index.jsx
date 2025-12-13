import React, { useState } from "react";
import "./styles.css";

export const ToggleButton = ({ onLabel = "ON", offLabel = "OFF" }) => {
    const [active, setActive] = useState(false);

    return (
        <button className={`toggle-btn ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
            {active ? onLabel : offLabel}
        </button>
    );
};