import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark, materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from '../Button';
import './styles.css'

const languages = ['javascript', 'php', 'css', 'html', 'python', 'r']

export const BloqueCodigo = ({ code = '', language = "javascript", theme = 'light' }) => {

    const [copied, setCopied] = useState(false);

    let languageSelected = languages[language] || language
    const themeObject = theme === "dark" ? a11yDark : materialLight;

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='bloque'>
            <Button onClick={copyCode}>{copied ? "Copiado!" : "Copiar"}</Button>

            <SyntaxHighlighter language={languageSelected} style={themeObject} showLineNumbers wrapLines>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
