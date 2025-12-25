import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark, materialLight, darcula, dracula, okaidia, solarizedlight, duotoneDark, gruvboxDark, materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from '../Button';
import './styles.css'

const LANGUAJES = ['javascript', 'php', 'css', 'html', 'python', 'r', 'js', 'json', 'md', 'markdown', 'yml', 'docker', 'bash', 'shell', 'sql', 'mongo', 'regex',]
const THEMES = {
    light: materialLight,
    dark: a11yDark,
    dracula,
    darcula,
    okaidia,
    solarized: solarizedlight,
    duotone: duotoneDark,
    gruvboxDark,
    materialDark
};

export const BloqueCodigo = ({ code = '', language = "javascript", theme = 'light', copy = false, className }) => {

    const [copied, setCopied] = useState(false);

    let languageSelected = LANGUAJES[language] || language
    const themeObject = THEMES[theme] || dracula;

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`bloque ${className}`}>

            {copy && (<Button onClick={copyCode}>{copied ? "Copiado!" : "Copiar"}</Button>)}

            <SyntaxHighlighter language={languageSelected} style={themeObject} showLineNumbers wrapLines>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
