import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./styles.css";

export const DropButton = ({ label = "Opciones", items = [] }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const toggle = () => setOpen(!open);

    // CERRAR AL HACER CLIC FUERA
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleItemClick = (onClick) => {
        onClick();        // ejecuta la acción del item
        setOpen(false);   // Cierra el menú
    };

    return (
        <div className="drop" ref={ref}>
            <button className="drop__btn" onClick={toggle}>
                {label}
                <span className={`drop__arrow ${open ? "open" : ""}`}>
                    <MdOutlineArrowDropDown />
                </span>
            </button>

            {open && (
                <ul className="drop__menu">
                    {items.map((item, i) => (
                        <li key={i} onClick={() => handleItemClick(item.onClick)}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};