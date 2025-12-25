import React, { useRef, useState } from 'react';
import Styles from './styles.module.css';
import { FaUpload, FaFile } from 'react-icons/fa';

/* =========================
   Group
========================= */
export const InputGroup = ({ title, children }) => (
    <fieldset className={Styles.form__group}>
        {title && <legend className={Styles.form__groupTitle}>{title}</legend>}
        {children}
    </fieldset>
);

/* =========================
   Input
========================= */
export const Input = ({
    type = 'text',
    name,
    id,
    label,
    value = '',
    checked,
    disabled,
    showErrorMessage = false,
    errorMessage,
    listItems = [],
    listItemNameKey = '',
    listItemNameValue = '',
    placeholder='',
    onFocus=null,
    onBlur=null,
    onChange = () => { }
}) => {
    const fieldClass = `
    ${Styles.form__field}
    ${showErrorMessage ? Styles['form__field--error'] : ''}
  `;

    const commonProps = {
        name,
        id,
        onChange,
        onFocus,
        onBlur,
        disabled,
        placeholder,
        className: Styles.form__input
    };

    const renderField = () => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        {...commonProps}
                        className={`${Styles.form__input} ${Styles.form__textarea}`}
                        value={value}
                    />
                );

            case 'select':
                return (
                    <select
                        {...commonProps}
                        value={value}
                        className={`${Styles.form__input} ${Styles.form__select}`}
                    >
                        <option value="" />
                        {listItems.map((item, index) => (
                            <option key={index} value={item[listItemNameKey]}>
                                {item[listItemNameValue]}
                            </option>
                        ))}
                    </select>
                );

            case 'checkbox':
                return (
                    <label>
                        <input
                            type="checkbox"
                            name={name}
                            checked={checked}
                            onChange={onChange}
                        />{' '}
                        {label}
                    </label>
                );

            default:
                return (
                    <input
                        {...commonProps}
                        type={type}
                        value={value}
                    />
                );
        }
    };

    return (
        <div className={fieldClass}>
            {renderField()}
            {label && type !== 'checkbox' && (
                <label htmlFor={id} className={Styles.form__label}>
                    {label}
                </label>
            )}
            {showErrorMessage && (
                <span className={Styles.form__message}>{errorMessage}</span>
            )}
        </div>
    );
};

/* =========================
   Searchable select
========================= */
export const SearchableSelect = ({
    name,
    id,
    label,
    value = '',
    listItems = [],
    listItemNameKey = '',
    listItemNameValue = '',
    onChange
}) => {
    const [search, setSearch] = useState(value);
    const [open, setOpen] = useState(false);

    const filtered = listItems.filter(item =>
        item[listItemNameKey].toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={Styles.form__field}>
            <input
                className={Styles.form__input}
                value={search}
                placeholder=" "
                onChange={e => setSearch(e.target.value)}
                onClick={() => setOpen(!open)}
            />
            <label className={Styles.form__label}>{label}</label>

            {open && (
                <ul className={Styles.form__dropdown}>
                    {filtered.length ? (
                        filtered.map((item, i) => (
                            <li
                                key={i}
                                className={Styles.form__option}
                                onClick={() => {
                                    onChange({
                                        target: {
                                            name,
                                            value: item[listItemNameValue]
                                        }
                                    });
                                    setSearch(item[listItemNameValue]);
                                    setOpen(false);
                                }}
                            >
                                {item[listItemNameValue]}
                            </li>
                        ))
                    ) : (
                        <li className={Styles.form__noResults}>Sin resultados</li>
                    )}
                </ul>
            )}
        </div>
    );
};

/* =========================
   File input
========================= */
export const FileInput = ({
    label,
    name,
    id,
    onChange,
    accept,
    maxSize
}) => {
    const ref = useRef(null);
    const [files, setFiles] = useState([]);

    const handleChange = e => {
        const file = e.target.files[0];
        if (!file || file.size > maxSize) return;
        setFiles([file]);
        onChange(file);
    };

    return (
        <div className={Styles.form__file}>
            <input
                type="file"
                hidden
                ref={ref}
                name={name}
                id={id}
                accept={accept}
                onChange={handleChange}
            />

            <div
                className={Styles.form__fileDrop}
                onClick={() => ref.current.click()}
            >
                <FaUpload />
                <p>{label}</p>
            </div>

            {files.length > 0 && (
                <ul className={Styles.form__fileList}>
                    {files.map((file, i) => (
                        <li key={i}>
                            <FaFile /> {file.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

/* =========================
   Error feedback
========================= */
export const ErrorFeedback = ({ message }) => (
    <div className={Styles.form__errorFeedback}>{message}</div>
);
