import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { renderToStaticMarkup } from "react-dom/server";
import { FaWhatsapp, FaFacebook, FaCoffee } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import { Button, Input } from "../../../components";




export const QRCode = () => {
    const qrRef = useRef(null);
    const qrInstance = useRef(null);

    const [text, setText] = useState("https://tusitio.com");
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(300);

    const iconList = [
        { name: "whatsapp", icon: FaWhatsapp, color: color},
        { name: "facebook", icon: FaFacebook, color: color },
        { name: "coffee", icon: PiPlantFill, color: color },
    ];
    const [selectedIcon, setSelectedIcon] = useState(iconList[0]);

    const getIconBase64 = (IconComponent, iconColor) => {
        const svgString = renderToStaticMarkup(
            <IconComponent size={80} color={iconColor} />
        );

        return (
            "data:image/svg+xml;base64," +
            btoa(unescape(encodeURIComponent(svgString)))
        );
    };

    useEffect(() => {
        qrInstance.current = new QRCodeStyling({
            width: size,
            height: size,
            data: text,
            image: getIconBase64(selectedIcon.icon, selectedIcon.color),

            dotsOptions: {
                color: color,
                type: "rounded",
            },

            backgroundOptions: {
                color: "#ffffff",
            },

            imageOptions: {
                margin: 10,
            },
        });

        qrInstance.current.append(qrRef.current);
    }, []);

    useEffect(() => {
        if (!qrInstance.current) return;

        qrInstance.current.update({
            width: size,
            height: size,
            data: text,
            image: getIconBase64(selectedIcon.icon, selectedIcon.color),

            dotsOptions: {
                color: color,
            },
        });
    }, [text, color, size, selectedIcon]);

    const descargar = () => {
        qrInstance.current.download({
            name: "mi-qr",
            extension: "png",
        });
    };

    return (
        <div className="d-grid col-12 gap-2">
            <div className="span-12">
                <h2>QR din&#225;mico</h2>
            </div>

            {/* TEXTO */}
            <div className="span-12 span-md-4">
                 <Input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

            </div>

            {/* COLOR */}
            <div className="span-12 span-md-1">
                <Input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>

            {/* TAMAÑO */}
            <div className="span-12 span-md-1">
                <Input
                    type="number"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                />
            </div>


            {/* ICONOS DESDE ARRAY */}
            <div className="span-12 span-md-1 d-flex gap-1">
                {iconList.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Button
                            key={index}
                            onClick={() => setSelectedIcon(item)}
                        >
                            <Icon size={24} color={item.color} />
                        </Button>
                    );
                })}
            </div>

            <div className="span-12 span-md-1">
                <Button onClick={descargar}>Descargar</Button>
            </div>

            <div className="span-12">
                <div ref={qrRef}></div>
            </div>
        </div>
    );
}